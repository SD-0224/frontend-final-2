import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const userData = {
  userID: 21,
  firstName: "Hamada",
  lastName: "Assi",
  email: "test@gmail.com",
  phoneNumber: "0560000000",
  image: null,
  dateOfBirth: null,
  googleId: null,
};

export default function UserProfileForm() {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8}>
        <Paper>
          <Typography variant="h5">Personal Information</Typography>
          <form>
            <Stack direction={"row"}>
            <TextField
            sx={{margin:'10px 5px 10px 0'}}
              fullWidth
              label="First Name"
              name="firstName"
              value={userData.firstName}
              onChange={() => {}}
            />
            <TextField
            sx={{margin:'10px 0 10px 5px'}}
              fullWidth
              label="Last Name"
              name="lastName"
              value={userData.lastName}
              onChange={() => {}}
            />
            </Stack>

            <TextField
            sx={{margin:'10px 0'}}
              fullWidth
              label="Email"
              name="email"
              value={userData.email}
              onChange={() => {}}
            />
            <Stack direction={"row"}>
            <TextField
            sx={{margin:'10px 0'}}
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={() => {}}
            />
            </Stack>
            <Button variant="contained" color="primary" onClick={() => {}}>
              Save
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
