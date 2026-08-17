// ErrorMessage.jsx
function ErrorMessage({ message }) {
  return (
    <div className="text-center py-10 text-red-500">
      {message || "Something went wrong. Please try again."}
    </div>
  );
}
export default ErrorMessage;