import { Box, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

export default function CartInteractionBox() {
  return (
    <Box>
      <Box sx={{ display: "flex", margin: "30px 50px" }}>
        <PrimaryButton label={"Place Order"} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        <Link to="/">
          <Typography sx={{ color: "#1B4B66", fontWeight: "600" }}>
            Continue Shopping
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
