"use client";

import { useState } from "react";

interface CarFormProps {
  onResults: (data: any) => void;
  setLoading: (value: boolean) => void;
}

export default function CarForm({
  onResults,
  setLoading,
}: CarFormProps) {
  const [form, setForm] = useState({
    budget: 1500000,
    fuelType: "Petrol",
    transmission: "Automatic",
    usage: "Family",
  });

  const submit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/recommend",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      onResults(data);
    } catch (error) {
      console.error(
        "Failed to fetch recommendations:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Budget */}

      <div>
        <label className="block mb-2 font-medium">
          Budget (₹)
        </label>

        <input
          type="number"
          value={form.budget}
          onChange={(e) =>
            setForm({
              ...form,
              budget: Number(e.target.value),
            })
          }
          className="w-full border rounded-lg p-3"
          placeholder="Enter Budget"
        />
      </div>

      {/* Fuel Type */}

      <div>
        <label className="block mb-2 font-medium">
          Fuel Type
        </label>

        <select
          value={form.fuelType}
          onChange={(e) =>
            setForm({
              ...form,
              fuelType: e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="Petrol">
            Petrol
          </option>

          <option value="Diesel">
            Diesel
          </option>

          <option value="Hybrid">
            Hybrid
          </option>

          <option value="EV">
            EV
          </option>
        </select>
      </div>

      {/* Transmission */}

      <div>
        <label className="block mb-2 font-medium">
          Transmission
        </label>

        <select
          value={form.transmission}
          onChange={(e) =>
            setForm({
              ...form,
              transmission:
                e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="Automatic">
            Automatic
          </option>

          <option value="Manual">
            Manual
          </option>
        </select>
      </div>

      {/* Usage */}

      <div>
        <label className="block mb-2 font-medium">
          Primary Usage
        </label>

        <select
          value={form.usage}
          onChange={(e) =>
            setForm({
              ...form,
              usage: e.target.value,
            })
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="Family">
            Family
          </option>

          <option value="City">
            City
          </option>

          <option value="Highway">
            Highway
          </option>

          <option value="Safety">
            Safety Focused
          </option>
        </select>
      </div>

      {/* Submit Button */}

      <button
        onClick={submit}
        className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
      >
        Find My Car
      </button>
    </div>
  );
}