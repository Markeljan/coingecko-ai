import Fuse, { type IFuseOptions } from "fuse.js";

import { TOKEN_MAP, type Token } from "@/lib/token-list";

const options: IFuseOptions<Token> = {
  includeScore: true,
  keys: [
    { name: "name", weight: 0.5 },
    { name: "symbol", weight: 0.3 },
    { name: "id", weight: 0.2 },
  ],
  isCaseSensitive: false,
  ignoreLocation: false,
  distance: 10,
  threshold: 0.1,
};

const tokens = Object.values(TOKEN_MAP);
const fuse = new Fuse(tokens, options);

export const searchToken = (query: string): Token[] => {
  const result = fuse.search(query);

  return result.map((res) => res.item);
};
