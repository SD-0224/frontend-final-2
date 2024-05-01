import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../../../../assets/HedearLogo/search.svg";

const SearchBarWrapper = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F1F1F1",
  marginLeft: 0,
  // width: "362px",
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.spacing(30),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  display: "flex",
  height: "44px",
  color: "#626262",
  width: "365px",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    maxWidth: "230px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    maxWidth: "110px",
    fontSize: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    height: "44px",
    color: "#626262",
    maxWidth: "300px",
    fontSize: "14px",
  },
}));

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchLinkRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    searchLinkRef.current.click();
  };

  return (
    <>
      <SearchBarWrapper onSubmit={handleSearch}>
        <SearchIconWrapper>
          <img src={search} alt="search-logo" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for products or brands..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link
          to={`/products/search/?search=${searchQuery}`}
          style={{ display: "none" }}
          ref={searchLinkRef}
        />
      </SearchBarWrapper>
    </>
  );
}
