export interface Preferences {
  budget: number;
  fuelType: string;
  transmission: string;
  usage: string;
}

export function calculateScore(
  car: any,
  preferences: Preferences
) {
  let score = 0;

  // Budget
  if (car.price <= preferences.budget) {
    score += 40;
  } else {
    score -= 30;
  }

  // Fuel
  if (car.fuel === preferences.fuelType) {
    score += 30;
  }

  // Transmission
  if (
    car.transmission === preferences.transmission
  ) {
    score += 20;
  }

  // Usage
  switch (preferences.usage) {
    case "Family":
      if (car.safety >= 4) score += 20;
      break;

    case "City":
      if (car.mileage >= 18) score += 20;
      break;

    case "Highway":
      if (car.transmission === "Automatic")
        score += 15;
      break;

    case "Safety":
      if (car.safety === 5) score += 25;
      break;
  }

  return Math.max(0, score);
}