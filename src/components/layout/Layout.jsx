import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CartPopup from "./CartPopup";
import UserPopup from "./userPopup/UserPopup";
import { useAuthenticatedUserContext } from "../../context/AuthenticatedUserContext";
import Wishlist from "./WishlistPopup/Wishlist";


const Layout = ({ children }) => {
  const { isAuthenticated } = useAuthenticatedUserContext();
  return (
    <>
      <Header />
      {isAuthenticated && <Wishlist />}
      <CartPopup />
      <UserPopup />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
