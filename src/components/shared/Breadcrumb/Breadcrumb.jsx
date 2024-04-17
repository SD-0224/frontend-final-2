import { List, ListItem, ListItemText } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrumb = ({ list }) => {
  const theme = useTheme();
  return (
    <List
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "0.5rem",
      }}
    >
      {list &&
        list.map((item, index) => {
          return (
            <>
              {index !== list.length - 1 ? (
                <>
                  <ListItem key={index} sx={{ width: "max-content", padding: "0" }}>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                        fontWeight: "600",
                      }}
                      to={item.link}
                    >
                      {item.text}
                    </Link>
                  </ListItem>

                  <ListItem key={index} sx={{ width: "max-content", padding: "0" }}>
                    <IoIosArrowForward />
                  </ListItem>
                </>
              ) : (
                <ListItem key={index} sx={{ width: "max-content", padding: "0" }}>
                  <ListItemText sx={{ fontWeight: "600" }}>{item.text}</ListItemText>
                </ListItem>
              )}
            </>
          );
        })}
    </List>
  );
};

export default Breadcrumb;
