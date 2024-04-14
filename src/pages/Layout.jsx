import React from "react";
import Header from "../components/layouts/header/header";
import Footer from "../components/footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />;
    </>
  );
};

export default Layout;
