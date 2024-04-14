import { Container, Box } from "@mui/material";
import ImageCarousel from "../components/shared/ImageCarousel/ImageCarousel";
import ProductNewArrivals from "../components/product/ProductNewArrivals";
import ProductHandpicked from "../components/product/ProductHandpicked";
import ProductBrands from "../components/product/ProductBrands";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem", marginTop: "7rem" }}>
        <Container>
          <ImageCarousel images={["/images/slider1.png"]} />
        </Container>
        <ProductNewArrivals />
        <ProductHandpicked />
        <ProductBrands />
      </Box>
    </>
  );
};

export default Home;
