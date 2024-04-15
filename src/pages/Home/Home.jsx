import { Container, Box } from "@mui/material";
import ImageCarousel from "../../components/shared/ImageCarousel/ImageCarousel";
import ProductNewArrivals from "../../components/products/components/ProductNewArrivals";
import ProductHandpicked from "../../components/products/components/ProductHandpicked";
import ProductBrands from "../../components/products/components/ProductBrands";
import { useState, useEffect } from "react";
import { fetchPath } from "../../utilities/fetch";
import Services from "../../components/shared/Banners/Services";
import { fetchHandpicked, fetchNewArrivals } from "../../components/products/services/ProductsService";

const baseURL = "backend-final-2-1.onrender.com";

const sliderImages = ["/images/slider1.png", "/images/slider1.png", "/images/slider1.png"];

const Home = () => {
  const [newArrivals, setNewArrivals] = useState();
  const [handpicked, setHandpicked] = useState();
  const [brands, setBrands] = useState();

  useEffect(() => {
    fetchNewArrivals()
      .then(data => setNewArrivals(data))
      .catch(error => console.error('Failed to load new arrivals:', error));

    fetchHandpicked()
      .then(data => setHandpicked(data))
      .catch(error => console.error('Failed to load handpicked:', error));


    fetchPath("https://fakestoreapi.com/products?limit=10&sort=desc") // Mock: Replace with API endpoint /brands
      .then((data) => {
        console.log("brands: ", data);
        Array.isArray(data) && setBrands(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
