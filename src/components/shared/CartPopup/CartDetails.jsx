import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, Stack, Box } from "@mui/material";
import Counter from "../Counter/Counter";
// import img from "../../../assets/ProductImg/image.svg";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

export default function CartDetails({ CounterComponent, item }) {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent:'space-between',
            marginTop: "30px",
          }}
        >
          <Box component="img" src={item.image} />
          <Box sx={{ marginTop: "px" }}>
            <Typography>{item.title}</Typography>
            <Typography sx={{ color: "#626262" }}>{item.subtitle}</Typography>
            <Counter sx={{ margin: "0px" }} value={1} />
            {/* <Stack
              direction={"row"}
              sx={{ marginTop: "10px", marginLeft: "-8px" }}
            >
              
            </Stack> */}

            {/* <Stack
              direction={"row"}
              sx={{ marginTop: "10px", marginLeft: "-8px" }}
            >
              <CounterComponent sx={{ margin: "0px" }} value={1} />
            </Stack> */}
          </Box>

          {/* <Box sx={{ marginLeft: "80px" }}>
            <IconButton>
              <CloseIcon />
            </IconButton>
            <Typography sx={{ marginTop: "20px" }}>{item.price}</Typography>
          </Box> */}
        </Box>
        <Divider sx={{ marginTop: "50px", marginLeft: "20px", width: "90%" }} />
      </Box>
    </>
  );
}
