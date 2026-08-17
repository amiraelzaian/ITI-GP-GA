// layouts/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { useWishlist } from "../../hooks/useWishlist.js";

function Layout() {
  const { count } = useWishlist();

  return (
    <>
      <Navbar wishlistCount={count} />
      <Outlet />
    </>
  );
}

export default Layout;
