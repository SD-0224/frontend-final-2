import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListSubheader } from "@mui/material";
import { useTheme } from "@mui/material";

export default function QuickLinks({ listHeader, menuItems }) {
  const theme = useTheme();
  return (
    <List
      sx={{
        maxWidth: 200,
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
        [theme.breakpoints.up("sm")]: {
          width: "30%",
        },
      }}
      subheader={
        <ListSubheader
          sx={{
            color: "#FFFFFF",
            paddingBottom: "0",
            bgcolor: "#1b4b66",
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: 500,
            padding: "0",
          }}
        >
          {listHeader}
        </ListSubheader>
      }
    >
      {menuItems.map((item, index) => {
        return (
          <ListItem
            disablePadding
            sx={{ width: "fit-content" }}
            key={item.text}
          >
            <ListItemButton
              component="a"
              href={item.path}
              sx={{
                padding: "0",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  fontSize: "16px",
                  lineHeight: "22px",
                  fontWeight: 500,
                  color: "#B6B6B6",
                  "&:hover": {
                    color: "#FFFFFF",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
