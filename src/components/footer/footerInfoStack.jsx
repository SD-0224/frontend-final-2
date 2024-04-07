import React from "react";
import { Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function FooterInfoStack() {
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
          justifyContent: "end",
          padding: "8px 0",
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
        © 2021 | Cora Leviene All Rights Reserved
      </Typography>
    </Stack>
  );
}
