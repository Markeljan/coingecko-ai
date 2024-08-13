import type { ReferenceConfiguration } from "@scalar/api-reference";
import { ApiReference } from "@scalar/nextjs-api-reference";
import type { NextRequest } from "next/server";

const isDevelopment = process.env.NODE_ENV === "development";

const BASE_CONFIG: ReferenceConfiguration = {
  spec: {
    url: "/.well-known/ai-plugin.json",
  },
  theme: "purple",
  metaData: {
    title: "CoinGecko AI Plugin",
    description: "Bitte.ai Plugin for CoinGecko API's",
    ogDescription: "AI Compatible API endpoints for Prices, Charts, and more.",
    ogTitle: "CoinGecko AI",
    ogImage: "https://lvjt7wkmlmpwhrpm.public.blob.vercel-storage.com/Screenshot%202024-07-31%20at%202.11.34%E2%80%AFPM-9TeD4oYi8W1jhTDwEhuy0c6d3vQeM1.png",
    twitterCard: "summary_large_image",
  },
};

export async function GET(req: NextRequest) {
  // Override the server URL during development
  const dynamicConfig = isDevelopment ? {
    ...BASE_CONFIG,
    servers: [
      {
        url: `${req.nextUrl.origin}/api/v3`,
        description: "Development Server"
      }
    ]

  } : BASE_CONFIG;

  return ApiReference(dynamicConfig)();
}