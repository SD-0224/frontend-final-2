import * as React from "react";
import { Typography, Box } from "@mui/material";
import Counter from "../Counter/Counter";

export default function CartDetails({ CounterComponent, item }) {
  return (
    <>
      <Box component="img" src={item.image} />
      <Box sx={{ marginLeft: { xs: "5px", sm: "0px" } }}>
        <Typography>{item.title}</Typography>
        <Typography sx={{ color: "#626262" }}>{item.subtitle}</Typography>
        <Counter sx={{ margin: "0px" }} value={1} />
      </Box>
    </>
  );
}
