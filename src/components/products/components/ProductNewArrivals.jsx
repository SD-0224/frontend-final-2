import { Typography, Container, Box, Link } from "@mui/material";
import ProductCard from "./ProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HorizontalList from "../../shared/HorizontalList/HorizontalList";
import LoadingIndicator from "../../shared/LoadingIndicator/LoadingIndicator";

const ProductNewArrivals = ({ products }) => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" textAlign="left" sx={{ fontWeight: "600" }}>
          New Arrivals
        </Typography>
        <Link
          href={"/products/new"}
          sx={{ textDecoration: "none", display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <Typography fontSize="small" sx={{ fontWeight: "600", textDecoration: "none" }}>
            View All
          </Typography>
          <ArrowForwardIosIcon fontSize="small" sx={{ color: "black" }} />
        </Link>
      </Box>
      <HorizontalList>
        {Array.isArray(products) ? (
          products.map((product) => {
            return <ProductCard key={product.slug} product={product} />;
          })
        ) : (
          <LoadingIndicator />
        )}
      </HorizontalList>
    </Container>
  );
};

export default ProductNewArrivals;
