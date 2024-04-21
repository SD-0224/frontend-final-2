import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

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
          </Routes>
        </Layout>
      </CategoriesProvider>
    </>
  );
}
