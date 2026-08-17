function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const maxVisible = 5;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = Math.min(totalPages, start + maxVisible - 1);
  if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const btn =
    "px-3 py-1.5 rounded-lg border border-text-muted/30 text-text transition hover:bg-primary hover:text-white";

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 mt-8" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${btn} disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        Prev
      </button>

      {start > 1 && (
        <>
          <button onClick={() => onPageChange(1)} className={btn}>1</button>
          <span className="px-1 text-text-muted">...</span>
        </>
      )}

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={
            num === currentPage
              ? "px-3 py-1.5 rounded-lg bg-primary text-white border border-primary"
              : btn
          }
        >
          {num}
        </button>
      ))}

      {end < totalPages && (
        <>
          <span className="px-1 text-text-muted">...</span>
          <button onClick={() => onPageChange(totalPages)} className={btn}>
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${btn} disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;