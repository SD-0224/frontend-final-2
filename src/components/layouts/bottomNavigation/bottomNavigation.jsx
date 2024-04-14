import useMediaQuery from "@mui/material/useMediaQuery";
import BottomNavBox from "./BottomNavBox";

export default function BottomNavigation() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (!isSmallScreen) {
    return null;
  }

  return (
    <>
      <BottomNavBox />
    </>
  );
}
