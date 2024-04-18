import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useCategoriesContext } from "../../../../context/CategoriesContext";
import { Link } from "react-router-dom";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  margin: theme.spacing(1),
  fontSize: "14px",
  fontWeight: 500,
  font: "500",
  // width: "80px",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
    margin: theme.spacing(1),
    width: "auto",
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.3s',
  },
  '& a:hover': {
    color: theme.palette.primary.main,
  },
}));
export default function NavCategory() {
  const { categories } = useCategoriesContext();
  const limitCategories = categories.slice(0, 5);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        color="black"
        gap={2}
        sx={{ width: "500px" }}
      >
        {
          limitCategories.map((category) => (

            <StyledTypography key={category.categoryID}><Link to={`/category/${category.slug}`}  >{category.name}</Link></StyledTypography>
          ))
        }

      </Box>
    </>
  );
}
