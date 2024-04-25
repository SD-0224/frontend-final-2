import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import BackButton from "./BackButton";

export default function PopUp({ open, handleClose, children }) {
  return (
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
          minHeight: "500px",
          maxHeight: "90svh",
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
      <Box sx={{ padding: "20px" }}>{children}</Box>
    </Dialog>
  );
}
