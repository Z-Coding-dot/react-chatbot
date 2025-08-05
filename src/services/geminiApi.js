const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const BASE_URL = import.meta.env.VITE_GEMINI_API_URL;

const headers = {
  "Content-Type": "application/json",
  "X-goog-api-key": API_KEY,
};

export const generateContent = async (message) => {
  if (!API_KEY) throw new Error("API_KEY not found");

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: message
              }
            ]
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // console.log(data)
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate content");
  }
};
