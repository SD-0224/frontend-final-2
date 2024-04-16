import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import block from "../../../assets/ProductImg/block.png";

const ImageWrapper = styled(Box)({
  width: "80%",
  height: "40%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export default function ProductCard() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Box>
          <ImageWrapper>
            <img src={block} alt="Description" />
          </ImageWrapper>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10px",
              alignItems: "baseline",
              flexDirection: "column",
            }}
          >
            <Typography fontSize={"12px"}>title</Typography>

            <Typography fontSize={"12px"} color={"gray"}>
              subtitle
            </Typography>
            <Typography fontSize={"12px"}>$4353</Typography>
          </Box>
        </Box>
        <Box>
          <ImageWrapper>
            <img src={block} alt="Description" />
          </ImageWrapper>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10px",
              alignItems: "baseline",
              flexDirection: "column",
            }}
          >
            <Typography fontSize={"12px"}>title</Typography>

            <Typography fontSize={"12px"} color={"gray"}>
              subtitle
            </Typography>
            <Typography fontSize={"12px"}>$4353</Typography>
          </Box>
        </Box>
      </div>
    </>
  );
}
