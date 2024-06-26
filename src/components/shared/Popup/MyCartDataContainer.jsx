import { Box, Stack } from "@mui/material";
import React from "react";
import Invoice from "../Invoice/Invoice";
import PriceDeleteComp from "./PriceDeleteComp";
import CartDetails from "./CartDetails";
import Divider from "@mui/material/Divider";
import CartInteractionBox from "./CartInteractionBox";

export default function MyCartDataContainer({ cart, invoiceData }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", maxHeight: "50svh", overflow: "auto" }}>
          {cart.map((item, index) => (
            <Box key={item.productID}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CartDetails item={item} />
                <PriceDeleteComp item={item} />
              </Box>
              <Divider />
            </Box>
          ))}
        </Box>
        <Stack sx={{ marginTop: "20px" }}>
          <Invoice invoiceData={invoiceData}></Invoice>
        </Stack>
      </Box>
      <CartInteractionBox />
    </>
  );
}
