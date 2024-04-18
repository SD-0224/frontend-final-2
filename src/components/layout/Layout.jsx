import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { fetchCategories } from "../../components/categories/services/CategoriesService";

const Layout = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);


  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
