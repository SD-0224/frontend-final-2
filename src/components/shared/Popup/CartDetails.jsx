import * as React from "react";
import CartItemQuantity from "../CartItemQuantity/CartItemQuantity";
import CardVertical from "../CardVertical/CardVertical";
import { Box } from "@mui/material";

export default function CartDetails({ item }) {
  return (
    <>
      <Box>
        <CardVertical item={item}>
          <CartItemQuantity sx={{ margin: "0px" }} itemID={item.productID} quantity={item.productQuantity} />
        </CardVertical>
      </Box>
    </>
  );
}
