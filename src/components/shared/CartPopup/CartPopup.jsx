import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, Stack } from "@mui/material";
import { Box } from "@mui/material";
import Counter from "../Counter/Counter";
import img from "../../../assets/ProductImg/image.svg";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import CartDetails from "../../shared/CartPopup/CartDetails";
import { Link } from "react-router-dom";

const cartData = [
  {
    image: "../../../../public/images/image.svg",
    title: "coach",
    subtitle: "Leather Coach Bag",
    price: "$665",
  },
  {
    image: "../../../../public/images/image.svg",
    title: "coach",
    subtitle: "Leather Coach Bag",
    price: "$33",
  },
  {
    image: "../../../../public/images/image.svg",
    title: "coach",
    subtitle: "Leather Coach Bag",
    price: "$225",
  },
];

export default function PopUp() {
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
            top: "280px",
            right: "10px",
            transform: "translateY(-50%)",
            width: "90%",
            maxWidth: "441px",
            maxHeight: "500px",
          },
          // Media query for smaller screens
          "@media (max-width: 600px)": {
            "& .MuiDialog-paper": {
              width: "90%", //
              right: "5px",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            marginTop: "20px",
          }}
        >
          <IconButton onClick={handleClose}>
            <ArrowBackIcon sx={{ color: "#1B4B66" }} />
          </IconButton>
          <Typography
            sx={{ color: "#1B4B66", fontWeight: "600", fontSize: "20px" }}
          >
            Back
          </Typography>
        </Box>

        <Box sx={{ marginLeft: "20px" }}>
          {cartData.map((item, index) => (
            <CartDetails key={index} item={item} />
          ))}
        </Box>

        {/* <CartDetails
          CounterComponent={Counter} />; */}

        <Box sx={{ display: "flex", margin: "50px" }}>
          <PrimaryButton label={"Place Order"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          <Link to="/">
            <Typography sx={{ color: "#1B4B66", fontWeight: "600" }}>
              Continue Shopping
            </Typography>
          </Link>
        </Box>
      </Dialog>
    </>
  );
}
