import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Link,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

const ProductCard = ({ title, category, price, imgPath, link }) => {
  return (
    <Card sx={{ minWidth: 285, boxShadow: "none", borderRadius: 2 }}>
      <Link href={`/products/${link}`} draggable="false">
        <CardActionArea>
          <CardMedia draggable="false" component="img" image={imgPath ?? '/public/images/img-placeholder.png'} sx={{ borderRadius: 2, height: 285 }} />
        </CardActionArea>
      </Link>
      <CardContent sx={{ padding: "1rem 0 0 !important", userSelect: "none" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </Typography>
          <IconButton sx={{ padding: 0 }}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
          }}
          fontSize={"0.9rem"}
          color={"gray"}
        >
          {category}
        </Typography>
        <Typography>${price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
