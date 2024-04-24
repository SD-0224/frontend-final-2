import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Wishlist from "../../pages/Wishlist/Wishlist";
import CartPopup from "./CartPopup";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wishlist />
      <CartPopup />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
