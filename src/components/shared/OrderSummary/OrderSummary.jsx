import React from "react";
import GutterlessList from "./GutterlessList";
import { Box, Divider, Typography } from "@mui/material";

const OrderDetails = [
  ["Sub Total", 119.69],
  ["Discount", -13.4],
  ["Delivery Fee", -0.0],
  ["Grand Total", 106.29],
];

export default function OrderSummary() {
  return (
    <Box>
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
        Order Details
      </Typography>
      <Divider width={"100%"} />
      <GutterlessList OrderDetails={OrderDetails} />
    </Box>
  );
}
