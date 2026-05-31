import Link from "next/link";

async function getHistory() {
  const response = await fetch(
    "http://localhost:3000/api/history",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function HistoryPage() {
  const searches = await getHistory();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between mb-6">

          <h1 className="text-3xl font-bold">
            Search History
          </h1>

          <Link
            href="/"
            className="underline"
          >
            Back
          </Link>

        </div>

        <div className="space-y-4">

          {searches.map((item: any) => (
            <div
              key={item.id}
              className="border rounded-lg p-4"
            >
              <div>
                Budget:
                ₹{item.budget.toLocaleString()}
              </div>

              <div>
                Fuel:
                {item.fuelType}
              </div>

              <div>
                Transmission:
                {item.transmission}
              </div>

              <div>
                Usage:
                {item.usage}
              </div>

              <div className="text-sm text-gray-500 mt-2">
                {new Date(
                  item.createdAt
                ).toLocaleString()}
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}