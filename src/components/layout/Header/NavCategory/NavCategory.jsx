import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useCategoriesContext } from "../../../../context/CategoriesContext";
import { Link } from "react-router-dom";
import LoadingIndicator from "../../../shared/LoadingIndicator/LoadingIndicator";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  margin: theme.spacing(1),
  fontSize: "14px",
  fontWeight: 500,
  font: "500",
  minWidth: "96px",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
    margin: theme.spacing(1),
    width: "auto",
    minWidth: "0px",
  },
  "& a": {
    textDecoration: "none",
    color: "inherit",
    transition: "color 0.3s",
  },
  "& a:hover": {
    color: theme.palette.primary.main,
  },
}));
export default function NavCategory() {
  const { categories, isLoading } = useCategoriesContext();
  const limitCategories =
    Array.isArray(categories) && categories.length > 5 ? categories.slice(0, 5) : categories;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Box display="flex" alignItems="center" color="black" sx={{ maxWidth: "500px" }}>
        {Array.isArray(limitCategories) && limitCategories.map((category) => (
          <StyledTypography key={category.categoryID}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </StyledTypography>
        ))}
      </Box>
    </>
  );
}
