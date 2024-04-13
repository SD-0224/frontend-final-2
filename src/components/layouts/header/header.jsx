import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../../assets/HedearLogo/home-logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import BurgerMenu from "./menu/menu";
import HeaderIcons from "./headerIcons/headerIcons";
import SearchBar from "./searchBar/searchBar";
import NavCategory from "./navCategory/navCategory";

export default function Header() {
  const theme = useTheme();
  const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container sx={{ mx: 2 }}>
        <AppBar
          sx={{ bgcolor: "white", margin: "0px", Height: "80px", boxShadow: 0 }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img sx={{ width: "108" }} src={logo} alt="home-logo" />
            {isLargerScreen && (
              <>
                <NavCategory />
                <SearchBar />
                <HeaderIcons />
              </>
            )}
            {!isLargerScreen && <BurgerMenu />}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}
