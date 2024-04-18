import { CircularProgress, ListItem } from "@mui/material";
import HorizontalList from "../../shared/HorizontalList/HorizontalList";
import ProductCard from "../components/ProductCard";

export default function RelatedProducts({ products }) {
  return (
    <>
      <HorizontalList>
        {Array.isArray(products) ? (
          products.map((product, index) => {
            return (
              <ListItem key={index}>
                <ProductCard product={product} />
              </ListItem>
            );
          })
        ) : (
          <CircularProgress sx={{ width: "100%", height: "100%", m: "auto" }} />
        )}
      </HorizontalList>
    </>
  );
}
