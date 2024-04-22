import { Box, IconButton } from "@mui/material";
import React from "react";
import CartDetails from "../CartPopup/CartDetails";
import Invoice from "../Invoice/Invoice";
import CloseIcon from "@mui/icons-material/Close";

export default function MyCartDataContainer({ cartData, invoiceData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{}}>
        {cartData.map((item, index) => (
          <Box key={index}>
            <CartDetails item={item} />
            {/* add clode icon */}
            {/* <Box sx={{ marginLeft: "80px" }}>
            <IconButton>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ marginTop: "20px" }}>{item.price}</Typography>
          </Box> */}
          </Box>
        ))}
      </Box>
      <Invoice invoiceData={invoiceData}></Invoice>
    </Box>
  );
}
