import React from "react";
import QuickLinks from "./QuickLinks.jsx";
import { Stack, Grid, useTheme } from "@mui/material";
import Logos from "./logos.jsx";
import FooterInfoStack from "./footerInfoStack.jsx";

export default function Footer() {
  const categoryMenuItems = [
    { text: "Skincare", path: "/" },
    { text: "Personal Care", path: "/" },
    { text: "Handbags", path: "/" },
    { text: "Apparels", path: "/" },
    { text: "Watches", path: "/" },
    { text: "Eye Wear", path: "/" },
    { text: "jewelry", path: "/" },
  ];

  const productsMenuItems = [
    { text: "Featured", path: "/" },
    { text: "Brands", path: "/" },
    { text: "Trendy", path: "/" },
  ];

  const aboutMenuItems = [
    { text: "Contact Us", path: "/" },
    { text: "About Us", path: "/" },
    { text: "Careers", path: "/" },
    { text: "Press", path: "/" },
  ];

  const policyMenuItems = [
    { text: "Return Policy", path: "/" },
    { text: "Terms of Use", path: "/" },
    { text: "Sitemap", path: "/" },
    { text: "Security", path: "/" },
    { text: "Privacy", path: "/" },
    { text: "EPR Compliance", path: "/" },
  ];

  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        bgcolor: "#1b4b66",
        color: "#B6B6B6",
        [theme.breakpoints.down("sm")]: {
          padding: "32px 15px 74px",
        },
        [theme.breakpoints.up("sm")]: {
          padding: "32px 60px 74px",
        },
      }}
      direction={{ xs: "column", sm: "column", md: "row" }}
    >
      <Grid item xs={9} padding={0}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ sm: 2, md: 1 }}
        >
          <QuickLinks
            listHeader={"Shop by Category"}
            menuItems={categoryMenuItems}
          />
          <QuickLinks
            listHeader={"Shop by products"}
            menuItems={productsMenuItems}
          />
          <QuickLinks listHeader={"About"} menuItems={aboutMenuItems} />
          <QuickLinks listHeader={"Policy"} menuItems={policyMenuItems} />
        </Stack>
      </Grid>
      <Grid
        item
        xs={3}
        container
        direction="column"
        justifyContent="space-evenly"
        sx={{
          maxHeight: "220px",
          [theme.breakpoints.down("sm")]: {
            alignItems: "flex-start",
            paddingTop: "30px",
            marginTop: "30px",
            borderTop: "1px solid #3E6F73",
          },
          [theme.breakpoints.up("sm")]: {
            alignItems: "flex-end",
          },
        }}
      >
        {/* logos component: four icons with avatar */}
        <Logos />
        {/* footer info component to show location */}
        <FooterInfoStack />
      </Grid>
    </Grid>
  );
}
