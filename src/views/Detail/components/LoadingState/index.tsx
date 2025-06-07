import { styles } from "./styles";

export const LoadingState = () => (
  <div role="status" aria-live="polite" className={styles.loading}>
    Loading movie details...
  </div>
);
