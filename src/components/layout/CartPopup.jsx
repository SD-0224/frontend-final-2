import React from "react";
import PopUp from "../shared/Popup/Popup.jsx";
import MyCartDataContainer from "../shared/Popup/MyCartDataContainer.jsx";
import { useCartContext } from "../../context/CartContext.jsx";
import { Typography } from "@mui/material";

export default function CartPopup() {
  const { cart, showCart, closeCart, getInvoice } = useCartContext();

  return (
    <PopUp open={showCart} handleClose={closeCart}>
      {cart.length > 0 ? (
        <MyCartDataContainer cart={cart} invoiceData={getInvoice()} />
      ) : (
        <Typography>Cart is empty</Typography>
      )}
    </PopUp>
  );
}
