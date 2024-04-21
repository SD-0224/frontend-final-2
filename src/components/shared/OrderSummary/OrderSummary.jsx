import React from "react";
import { Box, Divider, Typography } from "@mui/material";


export default function OrderSummary({ title, children }) {
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
      {children}
    </Box>
  );
}
