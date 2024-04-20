import Box from "@mui/material/Box";
import bannerimg from "../../../assets/TiltleBannerImg/title-banner.svg";

export default function TitleBaner() {
  return (
    <>
      <Box
        sx={{
          width: "100%",

          paddingLeft: { xs: "10px", sm: "15px" },
          paddingRight: { xs: "10px", sm: "15px" },
        }}
      >
        <img src={bannerimg} alt="Hero" style={{ width: "100%" }} />
      </Box>
    </>
  );
}
