import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}
