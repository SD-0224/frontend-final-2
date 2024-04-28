import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CardVertical from "../CardVertical/CardVertical";
import WishlistButton from "../WishlistButton/WishlistButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function WishlistDataContainer({ WishlistData }) {
  if (WishlistData.length === 0) {
    return (
      <Typography
        variant="subtitle1"
        sx={{
          padding: "20px 0px",
          textAlign: "center",
          fontSize: "24px",
          color: "textSecondary",
        }}
      >
        Your wishlist is empty
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        {WishlistData.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CardVertical item={item} />
              <WishlistButton productId={item.productID} />
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>
      <PrimaryButton
        label={"Show All"}
        icon={""}
        onClick={() => console.log("clicked")}
      />
    </Box>
  );
}
