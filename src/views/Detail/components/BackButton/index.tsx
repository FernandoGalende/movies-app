import { styles } from "./styles";

export type BackButtonProps = {
  onBack: () => void;
};

export const BackButton = ({ onBack }: BackButtonProps) => (
  <nav aria-label="Navigation" className={styles.navigation}>
    <button
      onClick={onBack}
      className={styles.backButton}
      aria-label="Return to movie search">
      ← Back to search
    </button>
  </nav>
);
