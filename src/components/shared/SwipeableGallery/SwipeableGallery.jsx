import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import ImagesStepper from "../ImagesStepper/ImagesStepper";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function SwipeableGallery() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
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
            <Box key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
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
