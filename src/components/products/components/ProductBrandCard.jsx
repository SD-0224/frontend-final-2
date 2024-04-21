import { Card, CardActionArea, CardMedia, Link } from "@mui/material";
import React from "react";

const ProductBrandCard = ({ brand }) => {
  const { imagePath, slug } = brand;
  return (
    <Card
      sx={{
        width: 168,
        minWidth: 168,
        height: 168,
        boxShadow: "none",
        borderRadius: 2,
        background: "#F4F4F4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={`/category/${slug}`} draggable="false" sx={{ height: "100%", width: "100%" }}>
        <CardActionArea sx={{ height: "100%", width: "100%" }}>
          <CardMedia draggable="false" component="img" image={imagePath} sx={{ padding: "1.6rem" }} />
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProductBrandCard;
