import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { fetchCategories } from "../../components/categories/services/CategoriesService";
import { useCategoriesContext } from "../../context/CategoriesContext";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
