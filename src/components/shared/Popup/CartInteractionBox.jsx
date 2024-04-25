import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";

export default function CartInteractionBox() {
  const { closeCart } = useCartContext();

  return (
    <Box>
      <Link
        style={{ textDecoration: "none" }}
        to={"/mycart"}
        onClick={() => {
          closeCart();
        }}
      >
        <Box sx={{ display: "flex", margin: "30px 50px" }}>
          <PrimaryButton label={"Place Order"} />
        </Box>
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Button
          sx={{ padding: 0 }}
          onClick={() => {
            closeCart();
          }}
        >
          <Typography
            sx={{ color: "primary", fontWeight: "600", fontSize: "14px", textDecoration: "underline" }}
          >
            Continue Shopping
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
