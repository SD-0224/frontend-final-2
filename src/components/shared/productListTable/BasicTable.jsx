import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import CardVertical from "../CardVertical/CardVertical";

import { Box } from "@mui/material";

function createData(name, Price, Qty, Subtotal) {
  return { name, Price, Qty, Subtotal };
}

// replace this by real component
const cartData = [
  {
    image: "../../public/images/image.svg",
    title: "coach",
    subtitle: "Leather Coach Bag",
    price: "$665",
  },
];

export function MyComponent() {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          // justifyContent: { xs: "flex-start", sm: "space-evenly" },
          marginLeft: { xs: "5px", sm: "20px" },
        }}
      >
        {cartData.map((item, index) => (
          <CardVertical key={index} item={item}>
            <Typography sx={{ color: "#626262" }}>Qty -1</Typography>
          </CardVertical>
        ))}
      </Box>
    </Box>
  );
}

const Remove = () => (
  <Button
    variant="text"
    sx={{
      position: "absolute",
      bottom: 10,
      right: 0,
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "24px",
      textAlign: "center",
      color: "#B00020",
      textTransform: "none",
      textDecoration: "underLine",
    }}
  >
    Remove
  </Button>
);

const rows = [
  createData(<MyComponent />, 54.69, 1, 54.69),
  createData(<MyComponent />, 54.69, 1, 54.69),
];

const head = ["Product Name", "Price", "Qty", "Subtotal"];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: "none", maxWidth: "70%" }}
    >
      <Table
        sx={{ minWidth: 600, width: "80%", margin: "0px" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {head.map((title, index) =>
              index === 0 ? (
                <TableCell align="left">{title}</TableCell>
              ) : (
                <TableCell align="right">{title}</TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                position: "relative",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ border: 0, outline: 0, borderRadius: 0 }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                sx={{ border: 0, outline: 0, borderRadius: 0 }}
              >
                {row.Price}
              </TableCell>
              <TableCell
                align="right"
                sx={{ border: 0, outline: 0, borderRadius: 0 }}
              >
                {row.Qty}
              </TableCell>
              <TableCell
                align="right"
                sx={{ border: 0, outline: 0, borderRadius: 0 }}
              >
                {row.Subtotal}
              </TableCell>
              <Remove />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
