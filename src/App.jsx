import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";
import Category from "./pages/Category/Category";

import { CategoriesProvider } from "./context/CategoriesContext";

import ProductDetails from "./pages/ProductDetails/ProductDetails";


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
