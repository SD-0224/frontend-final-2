import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import theme from "../../../theme";
import { useWishlistContext } from "../../../context/WishlistContext";
import { useAuthenticatedUserContext } from "../../../context/AuthenticatedUserContext";

const CustomIconButton = styled(IconButton)(() => ({
  width: "40px",
  height: "40px",
}));

export default function WishlistButton({ productId }) {
  const { toggleWishlist, isProductInWishlist } = useWishlistContext();
  const { isAuthenticated } = useAuthenticatedUserContext();
  const active = isProductInWishlist(productId);
  return (
    <CustomIconButton disabled={!isAuthenticated} onClick={()=>toggleWishlist(productId)}>
      {active ? (
        <FavoriteIcon sx={{ color: [theme.palette.primary.main] }} />
      ) : (
        <FavoriteBorderOutlinedIcon
          sx={{ color: [theme.palette.primary.main] }}
        />
      )}
    </CustomIconButton>
  );
}
