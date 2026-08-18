export default function EmptyState({ icon, title, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      {icon}
      <p className="mt-6 text-text-muted font-medium text-lg">{title}</p>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-text hover:opacity-90 transition-opacity"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
