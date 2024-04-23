import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Stack, Box } from "@mui/material";

export default function PriceDeleteComp({ item }) {
  return (
    <>
      <Box sx={{ marginLeft: { xs: "60px", sm: "80px" } }}>
        <IconButton>
          <CloseIcon />
        </IconButton>
        <Typography sx={{ marginTop: "20px" }}>{item.price}</Typography>
      </Box>
    </>
  );
}
