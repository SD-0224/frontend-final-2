import PrimaryButton from "../../components/shared/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/shared/SecondaryButton/SecondaryButton";
import { Stack, Box } from "@mui/material";

export default function MyCartButtons() {
  return (
    <>
      <Box sx={{ marginTop: "80px", marginBottom: "20px" }}>
        <PrimaryButton
          sx={{ width: "50%", marginRight: "5px" }}
          label={"Place Order"}
        />
        <SecondaryButton sx={{ width: "50%" }} label={"Continue Shopping"} />
      </Box>
    </>
  );
}
