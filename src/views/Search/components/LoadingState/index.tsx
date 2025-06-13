import { styles } from "./styles";

export function LoadingState() {
  return (
    <div data-testid="loading-state" className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.spinner} />
        <p className={styles.text}>Loading movies...</p>
      </div>
    </div>
  );
}
