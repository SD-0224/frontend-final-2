import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../../../../assets/HedearLogo/search.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F1F1F1",
  marginLeft: 0,
  width: "362px",
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
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    width: "auto",
    fontSize: "10px",
  },
}));

export default function SearchBar() {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <img src={search} alt="search-logo" />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search for products or brands..." />
      </Search>
    </>
  );
}
