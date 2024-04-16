import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import Counter from "../Counter/Counter";
import { useTheme } from "@mui/material/styles";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const product = {
  productID: 1,
  title: "Coach",
  subTitle: "Leather Coach Bag with adjustable starps.",
  price: 54.69,
  discount: 0.5,
  brandName: "Gucci",
  category: "Skin Care",
  avgReview: 4,
  reviewCount: 250,
  imgPath: null,
};

export default function ProductInfo() {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          [theme.breakpoints.down("sm")]: {
            maxWidth: "400px",
          },
          [theme.breakpoints.up("sm")]: {
            maxWidth: "600px",
          },
          flexGrow: 1,
        }}
      >
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
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
          margin={"30px 0"}
        >
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
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
        >
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
            {`$${product.price.toFixed(2)}   `}
          </Typography>
          {product.discount ? (
            <>
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
                {`${(product.price - product.discount * product.price).toFixed(
                  2
                )}`}
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
            </>
          ) : null}
        </Stack>
        <Divider
          variant="middle"
          sx={{
            marginBottom: "25px",
            marginTop: "25px",
          }}
        />
        <Stack direction={"row"} sx={{ marginBottom: "50px" }}>
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
    </Box>
  );
}
