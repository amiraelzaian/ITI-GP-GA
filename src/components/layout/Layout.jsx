import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { useWishlist } from "../../hooks/useWishlist.js";

function Layout() {
  const { count } = useWishlist();

  return (
    <>
      <Navbar wishlistCount={count} />
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default Layout;
