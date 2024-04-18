import Box from "@mui/material/Box";
import bannerimg from "../../../assets/TiltleBannerImg/title-banner.svg";

export default function TitleBaner() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <img src={bannerimg} alt="Hero" style={{ width: "100%" }} />
      </Box>
    </>
  );
}
