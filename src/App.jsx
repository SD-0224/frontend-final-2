import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import About from "./pages/About/About";

import { CategoriesProvider } from "./context/CategoriesContext";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/Signup/Signup";
import WishlistContextProvider from "./context/WishlistContext";

export default function App() {
  return (
    <>
      <WishlistContextProvider>
        <CategoriesProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/category/:slug"
              element={
                <Layout>
                  <Category />
                </Layout>
              }
            />
            <Route
              path="/products/:slug"
              element={
                <Layout>
                  <ProductDetails />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </Routes>
        </CategoriesProvider>
      </WishlistContextProvider>
    </>
  );
}
