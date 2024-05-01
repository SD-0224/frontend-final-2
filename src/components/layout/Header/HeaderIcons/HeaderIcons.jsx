import { styled } from "@mui/material/styles";
import bag from "../../../../assets/HedearLogo/bag.svg";
import wishlist from "../../../../assets/HedearLogo/wishlist.svg";
import profile from "../../../../assets/HedearLogo/profile.svg";
import IconButton from "@mui/material/IconButton";
import { useWishlistContext } from "../../../../context/WishlistContext";
import { useCartContext } from "../../../../context/CartContext";
import { useUserPopupContext } from "../../../../context/UserPopupContext";
import { useAuthenticatedUserContext } from "../../../../context/AuthenticatedUserContext";

const HeaderIconsRaber = styled("div")(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
const StyledImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "23px",
    height: "15px",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "5px",
  margin: "5px",
  [theme.breakpoints.down("md")]: {
    padding: 0,
    margin: 0,
  },
}));

export default function HeaderIcons() {
  const { toggleShowWishlist } = useWishlistContext();
  const { toggleCart } = useCartContext();
  const { toggleUserPopup } = useUserPopupContext();
  const { isAuthenticated } = useAuthenticatedUserContext();

  return (
    <>
      <HeaderIconsRaber>
        <StyledIconButton
          onClick={toggleShowWishlist}
          disabled={!isAuthenticated}
        >
          <StyledImage src={wishlist} alt="wishlist-logo" />
        </StyledIconButton>
        <StyledIconButton onClick={toggleUserPopup}>
          <StyledImage src={profile} alt="profile-logo" />
        </StyledIconButton>
        <StyledIconButton onClick={toggleCart}>
          <StyledImage src={bag} alt="bag-logo" />
        </StyledIconButton>
      </HeaderIconsRaber>
    </>
  );
}
