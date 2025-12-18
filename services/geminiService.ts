
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateAIInsights = async (topic: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Explain the importance and revolutionary impact of ${topic} in the modern world. Use professional, visionary language and highlight real-world applications. Format the output with clear headings using Markdown.`,
      config: {
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 16000 }
      },
    });
    return response.text || "No insights generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return `Error generating AI insights: ${error.message || "Please check your connection or API key."}`;
  }
};

export const analyzeImageWithAI = async (base64Image: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const imagePart = {
      inlineData: {
        mimeType: 'image/jpeg',
        data: base64Image.split(',')[1] || base64Image,
      },
    };
    const textPart = {
      text: "As an AI expert, analyze this image and explain how Computer Vision or Machine Learning would process it. Identify key objects and the technical concepts involved (e.g., edge detection, object classification, depth estimation). Make it educational."
    };
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts: [imagePart, textPart] },
    });
    return response.text || "Analysis complete.";
  } catch (error: any) {
    console.error("Gemini Image Analysis Error:", error);
    return `Failed to analyze image: ${error.message || "Ensure the image is valid and the API is accessible."}`;
  }
};
