import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Stack, Box } from "@mui/material";
import { useCartContext } from "../../../context/CartContext";

export default function PriceDeleteComp({ item }) {
  const { removeCartItem } = useCartContext();
  return (
    <>
      <Box sx={{ marginLeft: { xs: "60px", sm: "80px" } }}>
        <IconButton
          onClick={() => {
            removeCartItem(item.productID);
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ marginTop: "20px" }}>{item.subTotal}</Typography>
      </Box>
    </>
  );
}
