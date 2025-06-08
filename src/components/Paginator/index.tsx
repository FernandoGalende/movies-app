import { Button } from "../";
import { styles } from "./styles";

export interface PaginatorProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Paginator({
  current,
  total,
  onChange,
  className,
}: PaginatorProps) {
  if (total <= 1) return null;

  const handlePrevious = () => {
    if (current > 1) onChange(current - 1);
  };

  const handleNext = () => {
    if (current < total) onChange(current + 1);
  };

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <Button onClick={handlePrevious} disabled={current === 1} size="sm">
        Prev
      </Button>
      <Button disabled variant="secondary" size="sm">
        {current}
      </Button>
      <Button onClick={handleNext} disabled={current === total} size="sm">
        Next
      </Button>
    </div>
  );
}
