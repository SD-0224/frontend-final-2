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
      <Box
        sx={{ objectFit: "cover", width: "75px", height: "75px" }}
        component="img"
        src={item.imgPath}
      />
      <Box sx={{ paddingLeft: "20px" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "20px",
            textAlign: "left",
            color: "#171520",
          }}
        >
          {item.product.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            textAlign: "left",
            color: "#626262",
          }}
        >
          {item.product.subTitle}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}
