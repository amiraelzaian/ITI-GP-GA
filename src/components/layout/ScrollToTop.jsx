import { useEffect, useState } from "react";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-accent
        text-accent-text
        shadow-lg
        transition-all duration-300
        hover:scale-110
        hover:shadow-xl
        active:scale-95
      "
    >
      ↑
    </button>
  );
}

export default ScrollToTop;
