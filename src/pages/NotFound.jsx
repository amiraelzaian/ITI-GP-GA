import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6">
        <h1 className="text-8xl md:text-9xl font-bold text-accent">404</h1>

        <div className="h-1 w-24 mx-auto mt-2 rounded-full bg-accent-secondary" />
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-text mb-3">
        Page Not Found
      </h2>

      <p className="max-w-md text-text-muted mb-8">
        Sorry, the page you are looking for doesn't exist or may have been
        moved.
      </p>

      <Link
        to="/"
        className="
          inline-flex items-center justify-center
          px-6 py-3
          rounded-lg
          bg-accent
          text-accent-text
          font-semibold
          transition-all duration-300
          hover:opacity-90
          hover:scale-105
        "
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
