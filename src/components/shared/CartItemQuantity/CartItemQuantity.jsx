import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useCartContext } from "../../../context/CartContext";

function CartItemQuantity({ itemID, quantity }) {
  const theme = useTheme();

  const { setCartItemQuantity } = useCartContext();

  const buttonStyle = {
    padding: 0,
    fontSize: "1.2rem",
    minWidth: "fit-content",
    lineHeight: "0",
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "fit-content",
        minWidth: "20px",
        alignItems: "center",
        padding: "0 5px",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "4px",
        color: `${theme.palette.primary.main}`,
      }}
    >
      <Button
        onClick={() => {
          setCartItemQuantity(itemID, quantity - 1);
        }}
        variant="text"
        style={buttonStyle}
      >
        -
      </Button>
      <Typography variant="body1" sx={{ mx: 2 }}>
        {quantity}
      </Typography>
      <Button
        onClick={() => {
          setCartItemQuantity(itemID, quantity + 1);
        }}
        variant="text"
        style={buttonStyle}
      >
        +
      </Button>
    </Box>
  );
}

export default CartItemQuantity;
