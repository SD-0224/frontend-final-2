import * as React from "react";
import MenuSide from "./MenuSide";
import { Box, TextField, Grid, Typography } from "@mui/material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const CustomTextField = ({ label, ...props }) => {
  return (
    <TextField
      variant="filled"
      required
      sx={{
        width: "92%",
        "& .MuiFilledInput-underline:before": {
          borderBottom: "none",
        },
      }}
      label={label}
      {...props}
    />
  );
};

const StyledTypography = ({ children, ...props }) => {
  return (
    <Typography
      sx={{
        fontWeight: "500",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default function UserAddress() {
  return (
    <>
      <MenuSide title={"Add New Address"}>
        <Box component="form" sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Full name</StyledTypography>
                <CustomTextField id="fullName" label="Enter Name" type="text" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Mobile Number</StyledTypography>
                <CustomTextField
                  id="mobileNumber"
                  label="+967"
                  type="number"
                  inputProps={{ inputMode: "numeric" }}
                />
              </Box>
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Street Address</StyledTypography>
                <CustomTextField id="streetAddress" label="Enter Address" type="text" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">State</StyledTypography>
                <CustomTextField id="state" label="Enter State" type="text" />
              </Box>
            </Grid>

            {/* Third Row */}
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">City</StyledTypography>
                <CustomTextField id="city" label="Enter City" type="text" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <StyledTypography variant="subtitle1">Pin Code</StyledTypography>
                <CustomTextField id="pinCode" label="Enter Pin Code" type="text" />
              </Box>
            </Grid>
            <Box
              sx={{
                display: "flex",
                marginTop: "20px",
                marginLeft: "20px",
                width: "20%",
              }}
            >
              <PrimaryButton type={"submit"} label={"Submit"} />
            </Box>
          </Grid>
        </Box>
      </MenuSide>
    </>
  );
}
