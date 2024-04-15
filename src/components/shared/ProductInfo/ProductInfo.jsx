import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import Counter from "../Counter/Counter";
import { useTheme } from "@mui/material/styles";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { Margin } from "@mui/icons-material";

const product = {
  productID: 1,
  title: "Handbag",
  subTitle: "Fashionable handbag",
  price: 50.99,
  discount: 0.1,
  brandName: "Gucci",
  category: "Skin Care",
  avgReview: 3.5,
  reviewCount: 2,
  imgPath: null,
};

export default function ProductInfo() {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        component={"h1"}
        sx={{
          fontWeight: "600",
          fontSize: "34px",
          lineHeight: "44px",
          color: "#13101E",
        }}
      >
        {product.title}
      </Typography>
      <Typography
        component={"p"}
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "26px",
          color: "#626262",
        }}
      >
        {product.subTitle}
      </Typography>
      <Stack direction={"row"} alignItems="center" justifyContent="flex-start">
        <Rating
          name="read-only"
          value={product.avgReview}
          readOnly
          sx={{ color: "#FF8C4B", marginRight: "10px" }}
        />
        <Typography
          component={"span"}
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#B6B6B6",
          }}
        >{`(${product.reviewCount}) Ratings`}</Typography>
      </Stack>
      <Stack direction={"row"} alignItems="center" justifyContent="flex-start">
        <Typography
          component={"h2"}
          sx={{
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "52px",
            color: "#171520",
            marginRight: "10px",
          }}
        >
          {`$${product.price}   `}
        </Typography>
        <Typography
          component={"h3"}
          sx={{
            fontWeight: "600",
            fontSize: "34px",
            lineHeight: "26px",
            color: "#B6B6B6",
            textDecoration: "line-through",
            marginRight: "10px",
          }}
        >
          {`$${product.price}`}
        </Typography>
        <Typography
          component={"h4"}
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "26px",
            color: "#FF404B",
            marginRight: "10px",
          }}
        >
          {`${product.discount * 100}% OFF`}
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <Typography
          component={"p"}
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "26px",
            color: "#13101E",
          }}
        >{`Quantity:`}</Typography>
        <Counter />
      </Stack>
      <PrimaryButton label={"Add to bag"} icon={"work"} />
      <SecondaryButton label={"Add To Wishlist"} icon={"favorite"} />
    </Box>
  );
}
