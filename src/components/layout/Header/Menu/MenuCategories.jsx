import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useCategoriesContext } from "../../../../context/CategoriesContext";
import LoadingIndicator from "../../../shared/LoadingIndicator/LoadingIndicator";
import { MenuItem } from "@mui/material";

export default function MenuCategories() {
  const { categories, isLoading } = useCategoriesContext();
  const limitCategories = categories.slice(0, 5);
  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "black",
        }}
      >
        {limitCategories.map((category) => (
          <MenuItem key={category.categoryID}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`/category/${category.slug}`}
            >
              {category.name}
            </Link>
          </MenuItem>
        ))}
      </Box>
    </>
  );
}
