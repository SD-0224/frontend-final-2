import { Typography, Container, Box } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 0, title: "Grande", type: "Blossom Pouch", price: 39.49, image: "grande.png" },
  { id: 1, title: "Coach", type: "Leather Coach Bag", price: 54.69, image: "coach.png" },
  { id: 2, title: "Remus", type: "Brown Strap Bag", price: 57.0, image: "remus.png" },
  { id: 3, title: "Boujee", type: "Black Bag", price: 56.49, image: "boujee.png" },
];

const ProductsNewArrivals = () => {
  return (
    <Container>
      <Typography variant="h4" textAlign="left" sx={{ width: "100%", fontWeight: "600" }}>
        New Arrivals
      </Typography>
      <Box sx={{ display: "flex", gap: "40px", width: "100%", paddingTop: "1.5rem" }}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              type={product.type}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default ProductsNewArrivals;
