import * as React from "react";
import Counter from "../Counter/Counter";
import CardVertical from "../CardVertical/CardVertical";
import { Box } from "@mui/material";

export default function CartDetails({ item }) {
  return (
    <>
      <Box>
        <CardVertical item={item}>
          <Counter sx={{ margin: "0px" }} value={1} />
        </CardVertical>
      </Box>
    </>
  );
}
