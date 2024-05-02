import { Box, FormControl } from "@mui/material";
import MenuSide from "./MenuSide";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Elements, PaymentElement, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";


export default function PaymentMethod({ stripePromise, options, address }) {
  const stripe = useStripe();
  const elements = useElements();
  console.log("stripe", stripe);

  console.log("elements", elements);



  return (
    <>
      <MenuSide title={"Payment"}>
        <Box sx={{ width: "100%", marginTop: "20px" }}>

          <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "2rem" }}>
              <CardElement />
              <Box>
                <PrimaryButton type="submit" label="Place Order" />
              </Box>
            </FormControl>
          </form>

        </Box>
      </MenuSide>
    </>
  );
}
