export default function EmptyState({ icon, title, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      {icon}
      <p className="mt-4 text-text-muted font-medium">{title}</p>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 rounded-md bg-accent px-5 py-2.5 font-semibold text-accent-text hover:opacity-90 transition-opacity"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
