import { IoMdMenu } from "react-icons/io";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import SearchBar from "../searchBar1/SearchBar";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { Box } from "@mui/system";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IoMdMenu size={35} color="#1B4B66" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            width: "450px",
            height: "800px",
          },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "end", marginRight: "10px" }}
        >
          <FaRegRectangleXmark onClick={handleClose} />
        </Box>
        <MenuItem>
          <SearchBar />
        </MenuItem>
        <MenuItem>Handbags</MenuItem>
        <MenuItem onClick={handleClose}>Watches</MenuItem>
        <MenuItem onClick={handleClose}>Skincare</MenuItem>
        <MenuItem onClick={handleClose}>Jewellery</MenuItem>
        <MenuItem onClick={handleClose}>Apparels</MenuItem>
      </Menu>
    </div>
  );
}
