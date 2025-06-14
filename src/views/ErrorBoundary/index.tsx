import { Component, type ErrorInfo, type ReactNode } from "react";
import { styles } from "./styles";
import { Button } from "../../components";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container} role="alert">
          <h1 className={styles.title}>
            <span role="img" aria-label="error">
              🚨{" "}
            </span>
            Something went wrong
          </h1>
          <p className={styles.message}>
            {this.state.error?.message || "An unexpected error occurred"}
          </p>
          <Button
            variant="error"
            size="md"
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}>
            Try again
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
