import { Button } from "../";

import { styles } from "./styles";

export interface PaginatorProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
}

const MAX_BUTTONS = 4;

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

  const renderButtons = () => {
    const buttons = [];
    let start = Math.max(1, current - 2);
    const end = Math.min(total, start + MAX_BUTTONS);

    // If we're near the end, adjust start to show 5 buttons
    if (end === total) {
      start = Math.max(1, end - MAX_BUTTONS);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }

    return buttons.map((page) => (
      <Button
        key={page}
        onClick={() => onChange(page)}
        disabled={page === current}
        size="sm">
        {page}
      </Button>
    ));
  };

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <Button onClick={handlePrevious} disabled={current === 1} size="sm">
        Prev
      </Button>
      {renderButtons()}
      <Button onClick={handleNext} disabled={current === total} size="sm">
        Next
      </Button>
    </div>
  );
}
