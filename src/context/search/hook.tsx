import { useContext } from "react";
import type { UseSearch } from "./provider";
import { SearchContext } from "./context";

export const useSearch = (): UseSearch => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
