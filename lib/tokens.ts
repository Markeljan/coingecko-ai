import Fuse, { type IFuseOptions } from "fuse.js";

import tokenList from "@/lib/tokenList.json";

type Token = {
  id: string;
  symbol: string;
  name: string;
  platforms: {
    [key: string]: string;
  };
};

const options: IFuseOptions<Token> = {
  keys: [
    { name: "name", weight: 0.5 },
    { name: "id", weight: 0.4 },
    { name: "symbol", weight: 0.1 },
  ],
  includeScore: true,
  isCaseSensitive: false,
  ignoreLocation: false,
  threshold: 0.3,
  minMatchCharLength: 3,
  shouldSort: true,
};

const fuse = new Fuse(tokenList, options);

export const searchToken = (query: string): Token[] => {
  return fuse.search(query).map((res) => res.item);
};
