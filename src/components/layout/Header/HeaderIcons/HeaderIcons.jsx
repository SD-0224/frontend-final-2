import { styled } from "@mui/material/styles";
import bag from "../../../../assets/HedearLogo/bag.svg";
import wishlist from "../../../../assets/HedearLogo/wishlist.svg";
import profile from "../../../../assets/HedearLogo/profile.svg";
import IconButton from "@mui/material/IconButton";
import { Padding } from "@mui/icons-material";
import { useWishlistContext } from "../../../../context/WishlistContext";

const HeaderIconsRaber = styled("div")(({ theme }) => ({
  width: "114px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    padding: theme.spacing(0),
  },
}));
const StyledImage = styled("img")(({ theme }) => ({
  display: "flex",
  width: "24px",
  height: "24px",
  fontSize: "small",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0),
    width: "25px",
    height: "15px",
  },
}));

export default function HeaderIcons() {
  const { toggleShowWishlist } = useWishlistContext();
  return (
    <>
      <HeaderIconsRaber>
        <IconButton onClick={toggleShowWishlist}>
          <StyledImage src={wishlist} alt="wishlist-logo" />
        </IconButton>
        <IconButton>
          <StyledImage src={profile} alt="profile-logo" />
        </IconButton>
        <IconButton>
          <StyledImage src={bag} alt="bag-logo" />
        </IconButton>
      </HeaderIconsRaber>
    </>
  );
}
