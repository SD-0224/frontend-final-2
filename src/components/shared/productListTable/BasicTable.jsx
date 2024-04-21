import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

function createData(name, Price, Qty, Subtotal) {
  return { name, Price, Qty, Subtotal };
}

// replace this by real component
const MyComponent = () => (
  <div style={{ display: "flex" }}>
    <div
      style={{
        width: "50px",
        height: "50px",
        margin: "5px",
        background: "#999",
      }}
    ></div>
    <div>
      <h1>Coach</h1>
      <p>Leather Coach Bag</p>
    </div>
  </div>
);

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
    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
      <Table
        sx={{ minWidth: 650, width: "80%", margin: "auto" }}
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
