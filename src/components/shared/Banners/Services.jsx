import React from "react";
import BannerWide from "./BannerWide.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

export default function Services() {
  return (
    <Container fixed>
      <Grid container rowSpacing={2} columnSpacing={2} my={1}>
        <Grid item xs={12}>
          <BannerWide
            img={`/images/coral-alpha-banner 2.png`}
            text={`Discount Bonanza: Enjoy 15% Off and Beyond!`}
            type="wide"
            textPosition="left"
            color={"#9C1C00"}
            link={"/products/list/discount"}

          >
            <Box
              sx={{
                bgcolor: "#FFDD9D",
                color: "#9C1C00",
                width: "fit-content",
                padding: "5px 10px",
                borderRadius: "6px",
                marginTop: "20px",
              }}
            >
              {`UPTO 15% OFF`}
            </Box>
          </BannerWide>
        </Grid>
        <Grid item xs={6}>
          <BannerWide
            img={`/images/food.jpg`}
            text={`limited edition products`}
            type="short"
            textPosition="right"
            color="#1B4B66"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "rgba(23, 73, 77, 0.16)",
                color: "#1B4B66",
                width: "fit-content",
                padding: "5px",
                borderRadius: "50%",
                marginTop: "20px",
              }}
            >
              <ArrowForwardIcon />
            </Box>
          </BannerWide>
        </Grid>
        <Grid item xs={6}>
          <BannerWide
            img={`/images/school.jpg`}
            text={`Popular in the community!`}
            type="short"
            textPosition="right"
            color={"#1B4B66"}
            link={"/products/list/trendy"}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "rgba(23, 73, 77, 0.16)",
                color: "#1B4B66",
                width: "fit-content",
                padding: "5px",
                borderRadius: "50%",
                marginTop: "20px",
              }}
            >
              <ArrowForwardIcon />
            </Box>
          </BannerWide>
        </Grid>
      </Grid>
    </Container>
  );
}
