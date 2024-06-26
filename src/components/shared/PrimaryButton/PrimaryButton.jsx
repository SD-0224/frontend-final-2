import React from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { useTheme } from "@mui/material/styles";

const PrimaryButton = ({ label, icon, onClick }) => {
  return (
    <Button
      sx={{
        backgroundColor: "main",
        flexGrow: 1,
        color: "white",
        padding: "5px 35px",
        borderRadius: "8px",
        minWidth: "fit-content",
        height: "44px",
        "&:hover": {
          backgroundColor: "primary",
        },
        textTransform: "none",
        fontSize: "1rem",
      }}
      variant="contained"
      startIcon={icon ? <Icon sx={{ fontSize: "1rem !important" }}>{icon}</Icon> : undefined}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
