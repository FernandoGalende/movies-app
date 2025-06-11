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
        size="sm"
        aria-label={
          page === current ? `Current page ${page}` : `Go to page ${page}`
        }
        aria-current={page === current ? "page" : undefined}>
        {page}
      </Button>
    ));
  };

  return (
    <nav
      className={`${styles.wrapper} ${className || ""}`}
      aria-label="Pagination Navigation"
      role="navigation">
      <div className={styles.paginationContainer}>
        <Button
          onClick={handlePrevious}
          disabled={current === 1}
          size="sm"
          aria-label={`Go to previous page, current page is ${current}`}>
          <span aria-hidden="true">‹</span>
          <span>Prev</span>
        </Button>

        <div
          className={styles.pageNumbers}
          role="group"
          aria-label="Page numbers">
          {renderButtons()}
        </div>

        <Button
          onClick={handleNext}
          disabled={current === total}
          size="sm"
          aria-label={`Go to next page, current page is ${current}`}>
          <span>Next</span>
          <span aria-hidden="true">›</span>
        </Button>
      </div>

      {/* Screen reader only pagination status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Page {current} of {total}
      </div>
    </nav>
  );
}
