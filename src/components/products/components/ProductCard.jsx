import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { Link } from "react-router-dom";
import WishlistButton from "../../shared/WishlistButton/WishlistButton"

const ProductCard = ({ product }) => {
  const { title, category, price, discount, imgPath, slug, avgReview, reviewCount } = product;
  return (
    <Card sx={{ minWidth: 285, boxShadow: "none", borderRadius: 2 }}>
      <Link to={`/products/${slug}`} draggable="false">
        <CardActionArea>
          <CardMedia
            draggable="false"
            component="img"
            image={imgPath ?? "/images/img-placeholder.png"}
            sx={{
              borderRadius: 2,
              height: 285,
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#f0f0f0",
            }}
          />
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
          <WishlistButton productId={product.productID} />
          {/* <IconButton sx={{ padding: 0 }} onClick={onClick}>
            <FavoriteBorderIcon />
          </IconButton> */}
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

        {avgReview > 0 && reviewCount > 0 && (
          <Box sx={{ display: "flex", justifyContent: "start", gap: "0.5rem", alignItems: "center" }}>
            <Rating value={avgReview} precision={0.5} readOnly />
            <Typography sx={{ color: "primary.main", fontSize: "0.8rem" }}>{reviewCount} Ratings</Typography>
          </Box>
        )}

        <Box sx={{ display: "flex", justifyContent: "start", gap: "0.5rem", alignItems: "center" }}>
          <Typography>${false ? price : (price - price * discount).toFixed(2)}</Typography>
          {discount > 0 && (
            <>
              <Typography sx={{ color: "gray", textDecoration: "line-through", fontSize: "0.8rem" }}>
                ${price}
              </Typography>
              <Typography sx={{ color: "red" }}>{discount}% off</Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
