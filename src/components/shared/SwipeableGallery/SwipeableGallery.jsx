import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import ImagesStepper from "../ImagesStepper/ImagesStepper";

function SwipeableGallery({ images }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          [theme.breakpoints.down("sm")]: {
            maxWidth: "300px",
          },
          [theme.breakpoints.up("sm")]: {
            maxWidth: "450px",
          },
          flexGrow: 1,
        }}
      >
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <Box key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  draggable="false"
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      height: "300px",
                      maxWidth: "300px",
                    },
                    [theme.breakpoints.up("sm")]: {
                      height: "450px",
                      maxWidth: "450px",
                    },
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: "16px",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </Box>
          ))}
        </SwipeableViews>
        <ImagesStepper
          images={images}
          handleBack={handleBack}
          activeStep={activeStep}
          handleStepChange={handleStepChange}
          handleNext={handleNext}
          maxSteps={maxSteps}
        />
      </Box>
    </Box>
  );
}

export default SwipeableGallery;
