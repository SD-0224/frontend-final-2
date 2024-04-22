import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function Counter() {
  const theme = useTheme();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const buttonStyle = {
    padding: 0,
    fontSize: "1.2rem",
    minWidth: "fit-content",
    lineHeight: "0",
  };

  return (
    <Box
      sx={{
        display: "flex",
        width:'fit-content',
        minWidth:'20px',
        alignItems: "center",
        padding: "0 5px",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "4px",
        color: `${theme.palette.primary.main}`,
      }}
    >
      <Button onClick={decrement} variant="text" style={buttonStyle}>
        -
      </Button>
      <Typography variant="body1" sx={{ mx: 2 }}>
        {count}
      </Typography>
      <Button onClick={increment} variant="text" style={buttonStyle}>
        +
      </Button>
    </Box>
  );
}

export default Counter;
