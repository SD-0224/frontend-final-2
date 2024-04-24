import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import theme from "../../../theme";

const CustomIconButton = styled(IconButton)(() => ({
  width: "40px",
  height: "40px",
}));

let disabled = false;

export default function WishlistButton({ item }) {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const onClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <CustomIconButton disabled={disabled} onClick={onClick}>
      {isInWishlist ? (
        <FavoriteIcon sx={{ color: [theme.palette.primary.main] }} />
      ) : (
        <FavoriteBorderOutlinedIcon
          sx={{ color: [theme.palette.primary.main] }}
        />
      )}
    </CustomIconButton>
  );
}
