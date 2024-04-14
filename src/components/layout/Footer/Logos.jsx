import React from "react";
import { Avatar, Stack } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Logos() {
  return (
    <Stack direction={"row"} spacing={2}>
      <Avatar sx={{ width: 38, height: 38, bgcolor: "#639599" }}>
        <FacebookRoundedIcon sx={{ color: "#1B4B66" }} />
      </Avatar>
      <Avatar sx={{ width: 38, height: 38, bgcolor: "#639599" }}>
        <InstagramIcon sx={{ color: "#1B4B66" }} />
      </Avatar>
      <Avatar sx={{ width: 38, height: 38, bgcolor: "#639599" }}>
        <TwitterIcon sx={{ color: "#1B4B66" }} />
      </Avatar>
      <Avatar sx={{ width: 38, height: 38, bgcolor: "#639599" }}>
        <YouTubeIcon sx={{ color: "#1B4B66" }} />
      </Avatar>
    </Stack>
  );
}
