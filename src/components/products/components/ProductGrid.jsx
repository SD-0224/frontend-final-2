import { List } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {

  return (
    <List
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(285px,1fr))",
        columnGap: "2rem",
        rowGap: "5rem",
      }}
    >
      {products &&
        products.map((product) => {
          return <ProductCard key={product.productID} product={product} />;
        })}
    </List>
  );
};

export default ProductGrid;
