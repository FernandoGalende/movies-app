import { createContext } from "react";

import type { UseSearch } from "./provider";

export const SearchContext = createContext<UseSearch | null>(null);
