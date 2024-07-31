import { ApiReference } from "@scalar/nextjs-api-reference";

const config = {
  spec: {
    url: "/.well-known/ai-plugin.json",
  },
  theme: "purple",
  metaData: {
    title: "Coingecko AI Plugin",
    description: "Bitte.ai Plugin for CoisnGecko API's",
    ogDescription: "AI Compatible API endpoints for Prices, Charts, and more.",
    ogTitle: "Coingecko AI",
    ogImage:
      "https://lvjt7wkmlmpwhrpm.public.blob.vercel-storage.com/Screenshot%202024-07-31%20at%202.11.34%E2%80%AFPM-9TeD4oYi8W1jhTDwEhuy0c6d3vQeM1.png",
    twitterCard: "summary_large_image",
  },
} as const;

export const GET = ApiReference(config);
