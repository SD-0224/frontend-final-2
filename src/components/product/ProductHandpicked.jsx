import { Typography, Container, Box } from "@mui/material";
import ProductHandpickedCard from "./ProductHandpickedCard";
import HorizontalList from "../shared/HorizontalList/HorizontalList";

const ProductHandpicked = ({ products }) => {
  return (
    <Box maxWidth="full" sx={{ backgroundColor: "primary.main", padding: "2rem 0 1rem 0" }}>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color={"white"} textAlign="left" sx={{ fontWeight: "600" }}>
            Handpicked Collections
          </Typography>
        </Box>

        <HorizontalList>
          {products ? (
            products.map((product) => {
              return (
                <ProductHandpickedCard
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  link={product.id}
                />
              );
            })
          ) : (
            <Typography>Loading...</Typography>
          )}
        </HorizontalList>
      </Container>
    </Box>
  );
};

export default ProductHandpicked;
