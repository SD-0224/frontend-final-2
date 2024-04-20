import React from "react";
import Invoice from "../Invoice/Invoice";
import { Box, Divider, Typography } from "@mui/material";

const OrderDetails = [
  { label: "Sub Total", amount: 119.69 },
  { label: "Discount", amount: -13.4 },
  { label: "Delivery Fee", amount: 0.0 },
  { label: "Grand Total", amount: 106.29 },
];

export default function FinancialBreakdownList({ title, children }) {
  return (
    <Box sx={{ maxWidth: 360 }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Inter",
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: "26px",
          textAlign: "left",
          marginBottom: "20px",
          color: "#13101E",
        }}
      >
        {title}
      </Typography>
      <Divider width={"100%"} />
      <Invoice OrderDetails={OrderDetails} />
      {children}
    </Box>
  );
}
