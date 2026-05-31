export default function RecommendationCard({
  car,
}: {
  car: any;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between">

        <h2 className="text-xl font-bold">
          {car.make} {car.model}
        </h2>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {car.matchPercentage}% Match
        </span>

      </div>

      <p className="mt-3">
        ₹{car.price.toLocaleString()}
      </p>

      <p>Mileage: {car.mileage}</p>

      <p>Safety: {car.safety}/5</p>

      <div className="mt-4">

        <h3 className="font-semibold">
          Why this car?
        </h3>

        <ul className="list-disc ml-5 mt-2">
          {Array.isArray(car.reason)
            ? car.reason.map(
                (
                  item: string,
                  index: number
                ) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )
            : (
              <li>
                Fits your requirements
              </li>
            )}
        </ul>

      </div>

    </div>
  );
}