import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import About from "./pages/About/About";

import { CategoriesProvider } from "./context/CategoriesContext";

export default function App() {
  return (
    <>
      <CategoriesProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </Layout>
      </CategoriesProvider>
    </>
  );
}
