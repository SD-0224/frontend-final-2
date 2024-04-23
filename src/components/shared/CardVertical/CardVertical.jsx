import { Box, Typography } from "@mui/material";
import React from "react";

export default function CardVertical({ item, children }) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px 0",
      }}
    >
      <Box component="img" src={item.image} />
      <Box sx={{ paddingLeft: "20px" }}>
        <Typography>{item.title}</Typography>
        <Typography sx={{ color: "#626262" }}>{item.subtitle}</Typography>
        {children}
      </Box>
    </Box>
  );
}
