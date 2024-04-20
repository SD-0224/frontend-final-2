import { Typography, Container, Box } from "@mui/material";
import HorizontalList from "../../shared/HorizontalList/HorizontalList";
import ProductBrandCard from "./ProductBrandCard";
import LoadingIndicator from "../../shared/LoadingIndicator/LoadingIndicator";

const ProductBrands = ({ brands }) => {
  return (
    <Container>
      <Typography variant="h4" textAlign="left" sx={{ fontWeight: "600" }}>
        Shop by Brands
      </Typography>

      <HorizontalList gap="44px">
        {Array.isArray(brands) ? (
          brands.map((brand) => {
            return <ProductBrandCard key={brand.brandID} brand={brand} />;
          })
        ) : (
          <LoadingIndicator />
        )}
      </HorizontalList>
    </Container>
  );
};

export default ProductBrands;
