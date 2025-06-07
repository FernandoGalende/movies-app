interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export function Paginator({ page, totalPages, setPage }: PaginationProps) {
  if (totalPages === 1) return null;

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  return (
    <div>
      <button onClick={handlePrevious} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
