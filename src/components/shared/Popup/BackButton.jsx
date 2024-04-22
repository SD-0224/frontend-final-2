import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

export default function BackButton({ handleClose }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#fff",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "2",
        padding: "10px 20px",
      }}
    >
      <IconButton onClick={handleClose}>
        <ArrowBackIcon sx={{ color: "#1B4B66" }} />
      </IconButton>
      <Typography
        sx={{
          color: "#1B4B66",
          fontWeight: "600",
          fontSize: "20px",
          cursor: "pointer",
        }}
        onClick={handleClose}
      >
        Back
      </Typography>
    </Box>
  );
}
