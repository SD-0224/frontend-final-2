import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Box } from "@mui/material";

const HorizontalList = ({ children, gap = "40px" }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <Box
      sx={{
        display: "flex",
        gap: { gap },
        width: "100%",
        padding: "1.5rem 0",
        overflowX: "scroll",
      }}
      {...events}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export default HorizontalList;
