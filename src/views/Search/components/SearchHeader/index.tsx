import { styles } from "./styles";

interface SearchHeaderProps {
  loading: boolean;
  isEmptySearch: boolean;
}

export function SearchHeader({ loading, isEmptySearch }: SearchHeaderProps) {
  return (
    <div className={styles.headerContent}>
      <h1 className={styles.title}>Movies App</h1>
      <div role="status" aria-live="polite" className={styles.status}>
        {loading && <p>Searching movies...</p>}
        {isEmptySearch && <p>No movies found</p>}
      </div>
    </div>
  );
}
