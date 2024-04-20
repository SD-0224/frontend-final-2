import React from "react";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { useTheme } from "@mui/material/styles";

const SecondaryButton = ({ label, icon, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        backgroundColor: "#fff",
        color: "primary.main",
        flexGrow: 1,
        padding: "5px 35px",
        borderRadius: "8px",
        border: `1px solid`,
        minWidth: "fit-content",
        height: "44px",
        margin: "0 10px",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "#fff",
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

export default SecondaryButton;
