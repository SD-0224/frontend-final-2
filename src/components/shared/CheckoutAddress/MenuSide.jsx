import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Typography, Divider } from "@mui/material";

export default function MenuSide({ title, children }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton sx={{ marginTop: "100px" }} onClick={handleClick}>
        <ListItemText>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ fontSize: { xs: "12px", sm: "16px" } }}
          >
            {title}
          </Typography>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider sx={{ width: "98%" }} />
      <Collapse sx={{}} in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
}
