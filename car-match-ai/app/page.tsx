"use client";

import { useState } from "react";
import CarForm from "@/components/CarForm";
import RecommendationCard from "@/components/RecommendationCard";

export default function Home() {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            🚗 CarMatch AI
          </h1>

          <p className="text-gray-600 mt-3">
            Find the perfect car based on your budget,
            fuel preference, transmission, and usage.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <CarForm
          onResults={(data) => {
            setResults(data);
          }}
          setLoading={setLoading}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-8 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold">
              Finding your perfect car...
            </h2>

            <p className="text-gray-500 mt-2">
              Analyzing budget, mileage, safety,
              fuel type, and other preferences.
            </p>
          </div>
        )}

        {/* Empty State */}
        {!results && !loading && (
          <div className="mt-8 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-white">
            <h2 className="text-xl font-semibold">
              No recommendations yet
            </h2>

            <p className="text-gray-500 mt-3">
              Enter your preferences above and click
              <span className="font-medium">
                {" "}
                Find My Car
              </span>{" "}
              to get personalized recommendations.
            </p>
          </div>
        )}

        {/* Results */}
        {results?.recommendations?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">
              Recommended Cars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.recommendations.map(
                (car: any, index: number) => (
                  <RecommendationCard
                    key={`${car.make}-${car.model}-${index}`}
                    car={car}
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}