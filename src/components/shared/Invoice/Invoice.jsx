import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { Stack, Box } from "@mui/material";

// const OrderDetails = [
//   { label: "Sub Total", amount: 119.69 },
//   { label: "Discount", amount: -13.4 },
//   { label: "Delivery Fee", amount: 0.0 },
//   { label: "Grand Total", amount: 106.29 },
// ];

export default function Invoice({ invoiceData }) {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
        {invoiceData.map((value, index) => (
          <ListItem key={value} disableGutters sx={{ padding: "0" }}>
            <ListItemText
              primary={`${value.label}`}
              primaryTypographyProps={{
                sx: {
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  textAlign: "left",
                  color: "#626262",
                  marginBottom: "10px",
                  ...(index === invoiceData.length - 1 && {
                    fontWeight: 600,
                    color: "#171520",
                    marginBottom: "0px",
                  }),
                },
              }}
            />
            <ListItemText
              primary={`$${value.amount.toFixed(2)}`}
              primaryTypographyProps={{
                sx: {
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  color: "#171520",
                  marginBottom: "10px",
                  ...(index === invoiceData.length - 1 && {
                    fontWeight: 600,
                    lineHeight: "20px",
                    marginBottom: "0px",
                  }),
                },
              }}
              sx={{ maxWidth: "fit-content" }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginTop: "60px", marginBottom: "0px" }}>
        <PrimaryButton
          sx={{ width: "50%", marginRight: "5px" }}
          label={"Place Order"}
        />
        <SecondaryButton sx={{ width: "50%" }} label={"Continue Shopping"} />
      </Box>
    </>
  );
}
