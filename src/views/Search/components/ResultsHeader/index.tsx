import { useRef, useLayoutEffect } from "react";
import { styles } from "./styles";

interface ResultsHeaderProps {
  count: number;
  query: string;
  page: number;
  totalPages: number;
}

export function ResultsHeader({
  count,
  query,
  page,
  totalPages,
}: ResultsHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [page]);

  return (
    <div className={styles.resultsHeader} ref={ref}>
      <h2 className="sr-only">Search Results</h2>
      <p role="status">
        Found {count} results for "{query}"
      </p>
      <p role="status">
        Page {page} of {totalPages}
      </p>
    </div>
  );
}
