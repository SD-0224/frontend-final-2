import { Box, Stack } from "@mui/material";
import React from "react";
import CartDetails from "../CartPopup/CartDetails";
import Invoice from "../Invoice/Invoice";
import PriceDeleteComp from "../CartPopup/PriceDeleteComp";
import Divider from "@mui/material/Divider";

export default function MyCartDataContainer({ cartData, invoiceData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box>
        {cartData.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                justifyContent: { xs: "flex-start", sm: "space-evenly" },
                marginLeft: { xs: "5px", sm: "20px" },
              }}
            >
              <CartDetails item={item} />
              <PriceDeleteComp item={item} />
            </Box>
            <Divider
              sx={{
                marginTop: "50px",
                marginRight: "20px",
                marginBottom: "20px",
                marginLeft: "37px",
                width: "85%",
              }}
            />
          </Box>
        ))}
      </Box>
      <Stack sx={{ marginLeft: "40px", marginRight: "30px" }}>
        <Invoice invoiceData={invoiceData}></Invoice>
      </Stack>
    </Box>
  );
}
