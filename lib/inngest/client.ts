import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Lunvia",
  ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! } },
});
