import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  margin: theme.spacing(1),
  fontSize: "14px",
  fontWeight: 500,
  font: "500",
  width: "65px",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
    margin: theme.spacing(1),
    width: "auto",
  },
}));
export default function NavCategory() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        color="black"
        sx={{ width: "391px" }}
      >
        <StyledTypography>Handbags</StyledTypography>
        <StyledTypography>Watches</StyledTypography>
        <StyledTypography>Skincare</StyledTypography>
        <StyledTypography>Jewellery</StyledTypography>
        <StyledTypography>Apparels</StyledTypography>
      </Box>
    </>
  );
}
