export interface UserPreferences {
  budget: number;
  fuelType: string;
  transmission: string;
  usage: string;
}

export interface Car {
  make: string;
  model: string;
  price: number;
  fuel: string;
  transmission: string;
  mileage: number;
  safety: number;
}