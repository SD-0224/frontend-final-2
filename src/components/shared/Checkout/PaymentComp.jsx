import { Box, TextField, Button, Grid } from "@mui/material";
import MenuSide from "./MenuSide";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function PaymentMethod() {
  return (
    <>
      <MenuSide title={"Select Payment Method"}>
        <Box sx={{ maxWidth: 400, margin: "20px" }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Expiry Date"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Button variant="contained" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </MenuSide>
    </>
  );
}
