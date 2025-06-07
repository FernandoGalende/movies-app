import { styles } from "./styles";

export type ErrorStateProps = {
  message: string;
};

export const ErrorState = ({ message }: ErrorStateProps) => (
  <div role="alert" className={styles.error}>
    {message}
  </div>
);
