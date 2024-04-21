import { ListItem } from "@mui/material";
import HorizontalList from "../../shared/HorizontalList/HorizontalList";
import ProductCard from "../components/ProductCard";
import LoadingIndicator from "../../shared/LoadingIndicator/LoadingIndicator";

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
          <LoadingIndicator />
        )}
      </HorizontalList>
    </>
  );
}
