import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Wishlist from "../../pages/Wishlist/Wishlist";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wishlist />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
