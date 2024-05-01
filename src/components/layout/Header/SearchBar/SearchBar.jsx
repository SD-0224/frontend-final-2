import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import search from "../../../../assets/HedearLogo/search.svg";
import { Box } from "@mui/material";

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
  "& .MuiInputBase-input": {
    paddingLeft: "3rem",
  },
}));

export default function SearchBar() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: "140px",
            md: "290px",
            lg: "360px",
          },
          position: "relative",
          marginRight: "1.2rem",
          marginLeft: "auto",
          borderRadius: "8px",
          backgroundColor: "#F1F1F1",
        }}
      >
        <SearchIconWrapper>
          <img src={search} alt="search-logo" />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search for products or brands..." />
      </Box>
    </>
  );
}
