import { Typography, Container, Box, Link } from "@mui/material";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import { useDraggable } from "react-use-draggable-scroll";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductNewArrivals = ({ products }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);

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
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          width: "100%",
          paddingTop: "1.5rem",
          overflowX: "scroll",
        }}
        {...events}
        ref={ref}
      >
        {products ? (
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                type={product.type}
                price={product.price}
                image={product.image}
                link={product.id}
              />
            );
          })
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default ProductNewArrivals;
