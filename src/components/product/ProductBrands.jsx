import { Typography, Container, Box } from "@mui/material";
import HorizontalList from "../shared/HorizontalList/HorizontalList";
import ProductBrandCard from "./ProductBrandCard";

const ProductBrands = ({ brands }) => {
  return (
    <Container>
      <Typography variant="h4" textAlign="left" sx={{ fontWeight: "600" }}>
        Shop by Brands
      </Typography>

      <HorizontalList gap="44px">
        {brands ? (
          brands.map((brand) => {
            return <ProductBrandCard key={brand.id} image={brand.image} link={brand.id} />;
          })
        ) : (
          <Typography>Loading...</Typography>
        )}
      </HorizontalList>
    </Container>
  );
};

export default ProductBrands;
