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
        color: theme.palette.primary.main,
        flexGrow: 1,
        padding: "5px 10px",
        borderRadius: "8px",
        border: `1px solid ${theme.palette.primary.main}`,
        width: {
          xs: "70px",
          sm: "105px",
          md: "180px",
        },
        minWidth: 'fit-content',
        height: {
          xs: "20px", // Smaller height on extra small screens
          sm: "30px", // Medium height on small screens, larger screens will use the default height
          md: "44px",
        },
        margin:'0 10px',
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
        },
        textTransform: "none",
        fontSize: {
          xs: "8px",
          sm: "12px",
          md: "1rem",
        },
      }}
      variant="contained"
      startIcon={
        icon ? (
          <Icon
            sx={{
              fontSize: {
                xs: "8px !important",
                sm: "12px !important",
                md: "1rem !important",
              },
            }}
          >
            {icon}
          </Icon>
        ) : undefined
      }
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;
