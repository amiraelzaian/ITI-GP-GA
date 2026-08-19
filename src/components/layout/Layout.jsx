import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { useWatchlist } from "../../hooks/useWatchlist.js";

function Layout() {
  const { count } = useWatchlist();

  return (
    <>
      <Navbar watchlistCount={count} />
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default Layout;
