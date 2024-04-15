import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function ImagesStepper({
  images,
  handleBack,
  activeStep,
  handleStepChange,
  handleNext,
  maxSteps,
}) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight sx={{ fontSize: "2.5rem" }} />
        ) : (
          <KeyboardArrowLeft sx={{ fontSize: "2.5rem" }} />
        )}
      </Button>
      <Box>
        {images.map((elm, index) => (
          <Box
            component="img"
            key={index}
            src={elm.imgPath}
            alt={elm.label}
            sx={{
              [theme.breakpoints.down("sm")]: {
                width: "30px",
                height: "30px",
                margin: "3px",
              },
              [theme.breakpoints.up("sm")]: {
                width: "55px",
                height: "55px",
                margin: "5px",
              },
              borderRadius: "8px",
              cursor: "pointer",
              opacity: activeStep === index ? 0.5 : 1,
            }}
            onClick={() => handleStepChange(index)}
          />
        ))}
      </Box>
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft sx={{ fontSize: "2.5rem" }} />
        ) : (
          <KeyboardArrowRight sx={{ fontSize: "2.5rem" }} />
        )}
      </Button>
    </Box>
  );
}
