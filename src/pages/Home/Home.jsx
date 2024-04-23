import { Container, Box } from "@mui/material";
import ImageCarousel from "../../components/shared/ImageCarousel/ImageCarousel";
import ProductNewArrivals from "../../components/products/components/ProductNewArrivals";
import ProductHandpicked from "../../components/products/components/ProductHandpicked";
import ProductBrands from "../../components/products/components/ProductBrands";
import { useState, useEffect } from "react";
import { fetchPath } from "../../utilities/fetch";
import Services from "../../components/shared/Banners/Services";
import {
  fetchBrands,
  fetchHandpicked,
  fetchNewArrivals,
} from "../../components/products/services/ProductsService";
import { fetchCategories } from "../../components/categories/services/CategoriesService";

const baseURL = "backend-final-2-1.onrender.com";

const sliderImages = ["/images/slider1.png", "/images/slider2.jpg", "/images/slider3.jpg"];

const Home = () => {
  const [newArrivals, setNewArrivals] = useState();
  const [handpicked, setHandpicked] = useState();
  const [brands, setBrands] = useState();

  useEffect(() => {
    fetchNewArrivals()
      .then((data) => setNewArrivals(data.products))
      .catch((error) => console.error("Failed to load new arrivals:", error));

    fetchCategories()
      .then((data) => setHandpicked(data))
      .catch((error) => console.error("Failed to load handpicked:", error));

    fetchBrands()
      .then((data) => setBrands(data))
      .catch((error) => console.error("Failed to load brands:", error));
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem", margin: "7rem 0" }}>
        <Container>
          <ImageCarousel images={sliderImages} />
        </Container>
        <ProductNewArrivals products={newArrivals} />
        <ProductHandpicked products={handpicked} />
        <ProductBrands brands={brands} />
        <Services />
      </Box>
    </>
  );
};

export default Home;
