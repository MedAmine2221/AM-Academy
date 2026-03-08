import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_AI_API,
  apiVersion: "v1alpha",
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function recommendation(cv: any, courses: any) {  
  let attempts = 0;
  const maxAttempts = 3;
  const baseDelay = 2000;
  const maxDelay = 10000;

  const fullPrompt = `
    Agis comme un conseiller pédagogique expert en e-learning. Analyse le CV du candidat et recommande des cours pour améliorer ses compétences professionnelles.

    1️⃣ Lis attentivement le CV du candidat : ${cv}  
    2️⃣ Compare les compétences du candidat avec la liste des cours disponibles : ${courses}  
    3️⃣ Identifie les compétences manquantes ou à renforcer.  
    4️⃣ Sélectionne uniquement des cours de la liste fournie. Ne jamais inventer de cours.  
    5️⃣ Ne donne aucune explication, aucun commentaire, aucun classement.  

    ⚡ Format de sortie strict (JSON valide) :  

    [
      "Nom exact du cours 1",
      "Nom exact du cours 2",
      "Nom exact du cours 3",
      ...
    ]
  `;

  while (attempts < maxAttempts) {
    try {
      if (attempts > 0) {
        const backoffDelay = Math.min(
          baseDelay * Math.pow(2, attempts - 1),
          maxDelay,
        );

        await delay(backoffDelay);
      }

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: fullPrompt,
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
          topP: 0.8,
        },
      } as any);
      const text = response.text;
      const cleanedText = text?.trim();
      
      return cleanedText;
    } catch (error: any) {
      attempts++;
      const shouldRetry =
        error.message?.includes("429") ||
        error.message?.includes("503") ||
        error.message?.includes("500") ||
        error.message?.includes("rate_limit");

      if (shouldRetry && attempts < maxAttempts) {
        continue;
      }

      return "Je suis désolé, je rencontre actuellement des difficultés techniques. Veuillez réessayer dans quelques instants.";
    }
  }

  return "Je ne peux pas répondre pour le moment. Veuillez réessayer plus tard.";
}
