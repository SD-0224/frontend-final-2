import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function GutterlessList({ OrderDetails }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {OrderDetails.map((value) => (
        <ListItem key={value} disableGutters sx={{ padding: "0" }}>
          <ListItemText
            primary={`${value[0]}`}
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              textAlign: "left",
              color: "#626262",
            }}
          />
          <ListItemText
            primary={`$ ${value[1]}`}
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "18px",
              maxWidth: "fit-content",
              color: "#171520",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}
