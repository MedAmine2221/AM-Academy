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
    Agis comme un conseiller pédagogique spécialisé en e-learning.

    Voici mon CV :
    ${cv}

    Voici la liste des cours disponibles dans l’application :
    ${courses}

    Ta mission est de recommander uniquement des cours présents dans cette liste.

    Contraintes :
    - Tu dois choisir uniquement des cours présents dans la liste fournie.
    - Ne jamais inventer de cours.
    - Ne donne aucune explication.
    - Retourne uniquement un JSON valide.

    Format de réponse obligatoire :

    {
      "Nom du cours 1",
      "Nom du cours 2",
      "Nom du cours 3",
      "Nom du cours 4",
      ...
    }
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
