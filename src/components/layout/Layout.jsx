import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Wishlist from "./Wishlist/Wishlist";
import CartPopup from "./CartPopup";
import UserPopup from "./userPopup/UserPopup";
import { useAuthenticatedUserContext } from "../../context/AuthenticatedUserContext";
import BottomNavigation from "../../components/layout/BottomNav/BottomNavigation";

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
      <BottomNavigation />
    </>
  );
};

export default Layout;
