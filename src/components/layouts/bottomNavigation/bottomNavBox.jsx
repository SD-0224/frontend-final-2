import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import home from "../../../assets/bottomNavIcons/home.svg";
import homeGray from "../../../assets/bottomNavIcons/home-gray.svg";
import categories from "../../../assets/bottomNavIcons/categories.svg";
import categoriesGray from "../../../assets/bottomNavIcons/categories-gray.svg";
import wishlist from "../../../assets/HedearLogo/wishlist.svg";
import wishlistGray from "../../../assets/bottomNavIcons/wishlist.svg";
import profile from "../../../assets/bottomNavIcons/profile.svg";
import profileGray from "../../../assets/bottomNavIcons/profile-gray.svg";
import bag from "../../../assets/bottomNavIcons/bag.svg";
import bagGray from "../../../assets/bottomNavIcons/bag-gray.svg";
import { useState } from "react";

const NavItemWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  "&:hover .label": {
    visibility: "visible",
  },
}));

const Label = styled(Typography)({
  position: "absolute",
  bottom: "-25px",
  left: "50%",
  transform: "translateX(-50%)",
  visibility: "hidden",
  transition: "visibility 0.3s ease",
  marginBottom: "10px",
  color: "#1B4B66",
  fontWeight: "500",
});

const NavItem = ({ iconSrcGray, iconSrcBlack, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NavItemWrapper>
      <IconButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={isHovered ? iconSrcBlack : iconSrcGray} alt={label} />
      </IconButton>
      <Label className="label" variant="caption" fontSize="12px">
        {label}
      </Label>
    </NavItemWrapper>
  );
};

export default function BottomNavBox() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          bgcolor: "white",
          bottom: "0",
          position: "fixed",
          width: "100%",
          height: "80px",
        }}
      >
        <NavItem iconSrcGray={homeGray} iconSrcBlack={home} label="Home" />
        <NavItem
          iconSrcGray={categoriesGray}
          iconSrcBlack={categories}
          label="Categories"
        />
        <NavItem
          iconSrcGray={wishlistGray}
          iconSrcBlack={wishlist}
          label="Wishlist"
        />
        <NavItem
          iconSrcGray={profileGray}
          iconSrcBlack={profile}
          label="Profile"
        />
        <NavItem iconSrcGray={bagGray} iconSrcBlack={bag} label="Bag" />
      </Box>
    </>
  );
}
