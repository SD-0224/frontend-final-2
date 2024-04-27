import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Wishlist from "../../pages/Wishlist/Wishlist";
import CartPopup from "./CartPopup";
import UserPopup from "./userPopup/UserPopup";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wishlist />
      <CartPopup />
      <UserPopup />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
