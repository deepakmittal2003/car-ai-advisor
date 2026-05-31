import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function generateReasons(
  preferences: any,
  cars: any[]
) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are a car buying expert.

User Preferences:
${JSON.stringify(preferences, null, 2)}

Cars:
${JSON.stringify(cars, null, 2)}

For each car give exactly 3 short bullet points.

Return ONLY valid JSON.

Example:

{
  "Honda Elevate":[
    "Fits budget",
    "Strong safety",
    "Good family SUV"
  ]
}
`;

    const result =
      await model.generateContent(prompt);

    const text =
      result.response.text();

    try {
      return JSON.parse(text);
    } catch {
      return {};
    }
  } catch (error) {
    console.error(error);

    return {};
  }
}