import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function FooterInfoStack() {
  const theme = useTheme();
  return (
    <Stack>
      <Typography
        variant="p"
        display="flex"
        sx={{
          alignItems: "center",
          color: "#FFFFFF",
          fontSize: "14px",
          lineHeight: "18px",
          fontWeight: 500,
          padding: "8px 0",
          [theme.breakpoints.down("sm")]: {
            justifyContent: "start",
          },
          [theme.breakpoints.up("sm")]: {
            justifyContent: "end",
          },
        }}
      >
        <LocationOnOutlinedIcon /> United States
      </Typography>
      <Typography
        variant="p"
        display="flex"
        sx={{
          fontSize: "14px",
          lineHeight: "18px",
          fontWeight: 500,
          textAlign: "end",
        }}
      >
        © {new Date().getFullYear()} | Cora Leviene™ All Rights Reserved
      </Typography>
    </Stack>
  );
}
