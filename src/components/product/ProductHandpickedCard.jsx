import { Card, CardActionArea, CardContent, CardMedia, Typography, Link } from "@mui/material";
import React from "react";

const ProductHandpickedCard = ({ title, image, link }) => {
  return (
    <Card sx={{ minWidth: 285, boxShadow: "none", borderRadius: 2, position: "relative" }}>
      <Link href={`/collection/${link}`} draggable="false">
        <CardActionArea>
          <CardMedia draggable="false" component="img" image={`/images/${image}`} sx={{ borderRadius: 2 }} />
          <CardContent
            sx={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
              background: "linear-gradient(to top, rgb(3,24,26,0.46), transparent)",
            }}
          >
            <Typography color={"black"} fontWeight={"700"} fontSize={"1.5rem"}>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProductHandpickedCard;
