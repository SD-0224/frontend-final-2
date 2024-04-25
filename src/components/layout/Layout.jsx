import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Wishlist from "../../pages/Wishlist/Wishlist";
import UserPopup from "./userPopup/UserPopup";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wishlist />
      <UserPopup />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
