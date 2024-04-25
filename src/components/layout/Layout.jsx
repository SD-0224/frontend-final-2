import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Wishlist from "./Wishlist/Wishlist";
import UserPopup from "./userPopup/UserPopup";
import { useAuthenticatedUserContext } from "../../context/AuthenticatedUser";

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuthenticatedUserContext();
  return (
    <>
      <Header />
      {isAuthenticated && <Wishlist />}
      <UserPopup />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
