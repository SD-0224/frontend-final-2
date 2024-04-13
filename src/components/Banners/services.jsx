import React from "react";
import BannerWide from "./banner-wide";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Services() {
  return (
    <Container fixed>
      <Grid container rowSpacing={2} columnSpacing={2} my={1}>
        <Grid item xs={12}>
          <BannerWide
            img={`/images/coral-alpha-banner 2.png`}
            text={`Discount Bonanza: Enjoy 15% Off and Beyond!`}
            subText={`UPTO 15% OFF`}
            type="wide"
            textPosition="left"
            color={"#9C1C00"}
          />
        </Grid>
        <Grid item xs={6}>
          <BannerWide
            img={`/images/food.jpg`}
            text={`limited edition products`}
            type="short"
            textPosition="right"
            color="#1B4B66"
          />
        </Grid>
        <Grid item xs={6}>
          <BannerWide
            img={`/images/school.jpg`}
            text={`Popular in the community!`}
            type="short"
            textPosition="right"
            color={"#1B4B66"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
