function Loader() {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__spinner" />
      <span>Loading…</span>
    </div>
  );
}

export default Loader;
