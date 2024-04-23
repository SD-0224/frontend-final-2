import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useWishlistContext } from "../../context/WishlistContext";
import Wishlist from "../../pages/Wishlist/Wishlist";

const Layout = ({ children }) => {
  const { showWishlist } = useWishlistContext();
  return (
    <>
      <Header/>
      {showWishlist && <Wishlist /> }
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
