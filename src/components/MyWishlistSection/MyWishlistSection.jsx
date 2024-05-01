import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CardVertical from "../shared/CardVertical/CardVertical";
import WishlistButton from "../shared/WishlistButton/WishlistButton";
import OrderSummary from "../shared/OrderSummary/OrderSummary";

export default function MyWishlistSection() {
  const userWishList = [
    {
      productID: 6,
      userID: 21,
      imgPath:
        "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
      product: {
        productID: 6,
        title: "Foundation",
        subTitle: "Matte finish foundation",
        description: "Oil-free foundation for a natural look.",
        price: 115.99,
        quantity: 70,
        discount: 0.05,
        arrival: "2024-04-15T00:00:00.000Z",
        brandID: 5,
        categoryID: 2,
        slug: "foundation",
      },
    },
    {
      productID: 6,
      userID: 21,
      imgPath:
        "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
      product: {
        productID: 6,
        title: "Foundation",
        subTitle: "Matte finish foundation",
        description: "Oil-free foundation for a natural look.",
        price: 115.99,
        quantity: 70,
        discount: 0.05,
        arrival: "2024-04-15T00:00:00.000Z",
        brandID: 5,
        categoryID: 2,
        slug: "foundation",
      },
    },
    {
      productID: 6,
      userID: 21,
      imgPath:
        "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
      product: {
        productID: 6,
        title: "Foundation",
        subTitle: "Matte finish foundation",
        description: "Oil-free foundation for a natural look.",
        price: 115.99,
        quantity: 70,
        discount: 0.05,
        arrival: "2024-04-15T00:00:00.000Z",
        brandID: 5,
        categoryID: 2,
        slug: "foundation",
      },
    },
  ];

  return (
    <OrderSummary title={"My Wishlist"}>
      {userWishList.length === 0 ? (
        <Typography sx={{ padding: "20px", fontSize: "20px" }}>
          Your wishlist is empty
        </Typography>
      ) : (
        <Grid container spacing={3} paddingTop={3}>
          {userWishList.map((item, index) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #ececec",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <CardVertical item={item} />
                <WishlistButton productId={item.productID} />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </OrderSummary>
  );
}
