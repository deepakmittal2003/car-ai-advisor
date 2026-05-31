import { NextRequest, NextResponse } from "next/server";

import cars from "@/data/cars.json";

import { prisma } from "@/lib/prisma";
import { calculateScore } from "@/lib/recommendation";
import { generateReasons } from "@/lib/ai";

export async function POST(
  req: NextRequest
) {
  try {
    const body = await req.json();

    const {
      budget,
      fuelType,
      transmission,
      usage,
    } = body;

    await prisma.search.create({
      data: {
        budget: Number(budget),
        fuelType,
        transmission,
        usage,
      },
    });

    const rankedCars = cars
      .map((car) => ({
        ...car,
        score: calculateScore(car, {
          budget: Number(budget),
          fuelType,
          transmission,
          usage,
        }),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    const reasons =
      await generateReasons(
        {
          budget,
          fuelType,
          transmission,
          usage,
        },
        rankedCars
      );

    const recommendations =
      rankedCars.map((car) => {
        const key =
          `${car.make} ${car.model}`;

        return {
          ...car,
          matchPercentage:
            Math.min(
              100,
              Math.round(
                (car.score / 110) * 100
              )
            ),
          reason:
            reasons[key] ||
            [
              "Fits your budget",
              "Matches your preferences",
              "Strong value",
            ],
        };
      });

    return NextResponse.json({
      recommendations,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to generate recommendations",
      },
      {
        status: 500,
      }
    );
  }
}