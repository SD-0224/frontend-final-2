import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import theme from "../../../theme";
import { useWishlistContext } from "../../../context/WishlistContext";

const CustomIconButton = styled(IconButton)(() => ({
  width: "40px",
  height: "40px",
}));

let disabled = false;

export default function WishlistButton({ productId }) {
  const { toggleWishlist } = useWishlistContext();

  const [isInWishlist, setIsInWishlist] = useState(false);

  const onClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <CustomIconButton disabled={disabled} onClick={() => toggleWishlist(productId)}>
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
