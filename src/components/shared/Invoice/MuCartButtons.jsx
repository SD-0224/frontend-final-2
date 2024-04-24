import { Padding } from "@mui/icons-material";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { Stack, Box, Link } from "@mui/material";

export default function MyCartButtons() {
  return (
    <>
      <Box
        sx={{
          marginTop: "80px",
          marginBottom: "20px",
          width: "100%",
          display: "flex",
        }}
      >
        <PrimaryButton
          sx={{ width: "50%", marginRight: "5px" }}
          label={"GO to checkout"}
        />

        <SecondaryButton sx={{ width: "50%" }} label={"Continue Shopping"} />
      </Box>
    </>
  );
}
