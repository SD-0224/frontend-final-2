import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ButtonBase from "@mui/material/ButtonBase";
import {
  Box,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Item = styled(Paper)(() => ({
  width: "fit-content",
  backgroundColor: "transparent",
  boxShadow: "none",
  color: "#B6B6B6",
  "&:hover": {
    color: "#FFFFFF",
  },
}));

export default function DividerStack({ listHeader, menuItems, isSmallScreen }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingBottom: "30px",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
        [theme.breakpoints.up("sm")]: {
          maxWidth: 200,
          width: "30%",
        },
      }}
    >
      <Typography
        variant="p"
        display="flex"
        sx={{
          fontFamily: "Inter",
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 500,
          color: "#FFF",
          paddingBottom: "5px",
        }}
      >
        {listHeader}
      </Typography>
      <Stack
        direction={isSmallScreen ? "row" : "column"} // Set direction based on screen size
        divider={
          !isSmallScreen ? null : (
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "#B6B6B6" }}
            />
          )
        } // Add divider only on small screens
        spacing={1}
        sx={{ alignItems: "start", width: "100%", flexWrap: "wrap" }}
      >
        {menuItems.map((item) => (
          <ButtonBase key={item.text} component={Link} to={item.path}>
            <Item>{item.text}</Item>
          </ButtonBase>
        ))}
      </Stack>
    </Box>
  );
}
