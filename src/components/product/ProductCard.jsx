import { Card, CardActionArea, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

const ProductCard = ({ title, type, price, image }) => {
  return (
    <Card sx={{ minWidth: 285, boxShadow: "none", borderRadius: 2 }}>
      <CardActionArea>
        <CardMedia component="img" image={`/images/${image}`} sx={{ boxShadow: "", borderRadius: 2 }} />
      </CardActionArea>
      <CardContent sx={{ padding: "1rem 0 0" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{title}</Typography>
          <IconButton sx={{ padding: 0 }}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Typography>{type}</Typography>
        <Typography>${price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
