// EmptyState.jsx
function EmptyState({ text }) {
  return (
    <div className="text-center py-10 text-text-muted">
      {text || "No results found."}
    </div>
  );
}
export default EmptyState;