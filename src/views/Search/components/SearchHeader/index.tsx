import { styles } from "./styles";

export function SearchHeader() {
  return (
    <div className={styles.headerContent}>
      <h1 className={styles.title}>Movie Search</h1>
      <p className={styles.description}>Discover your next favorite movie</p>
    </div>
  );
}
