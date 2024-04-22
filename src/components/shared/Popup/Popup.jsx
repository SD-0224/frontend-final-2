import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import BackButton from "./BackButton";
import CartInteractionBox from "./CartInteractionBox";

// const cartData = [
//   {
//     image: "../../../../public/images/image.svg",
//     title: "coach",
//     subtitle: "Leather Coach Bag",
//     price: "$665",
//   },
//   {
//     image: "../../../../public/images/image.svg",
//     title: "coach",
//     subtitle: "Leather Coach Bag",
//     price: "$33",
//   },
//   {
//     image: "../../../../public/images/image.svg",
//     title: "coach",
//     subtitle: "Leather Coach Bag",
//     price: "$225",
//   },
// ];

// const invoiceData = [
//   { label: "Subtotal:", amount: 119.69 },
//   { label: "Tax:", amount: -13.4 },
//   { label: "Total:", amount: 0.0 },
// ];

export default function PopUp({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button sx={{ marginTop: "100px" }} onClick={handleClickOpen}>
        Open
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            position: "absolute",
            top: "48px",
            right: "5px",
            width: "90%",
            maxWidth: "441px",
            maxHeight: "500px",
            margin: "0px",
          },
          // Media query for smaller screens
          "@media (max-width: 600px)": {
            "& .MuiDialog-paper": {
              width: "100%",
              minHeight: "100vh",
              right: "0px",
              top: "0px",
            },
          },
        }}
      >
        <BackButton handleClose={handleClose} />
        <Box sx={{ padding: "20px" }}>
          {children}
        </Box>
        <CartInteractionBox />
      </Dialog>
    </>
  );
}
