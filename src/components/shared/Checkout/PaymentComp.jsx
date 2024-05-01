import { Box, FormControl } from "@mui/material";
import MenuSide from "./MenuSide";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";

export default function PaymentMethod({ stripePromise, options }) {
  return (
    <>
      <MenuSide title={"Payment"}>
        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Elements stripe={stripePromise} options={options}>
            <FormControl sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
              <PaymentElement />
              <Box>
                <PrimaryButton type={"submit"} label={"Place Order"} />
              </Box>
            </FormControl>
          </Elements>
        </Box>
      </MenuSide>
    </>
  );
}
