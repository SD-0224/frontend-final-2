import { useEffect } from "react";
import { useState } from "react";
import { fetchProductsByCategorySlug } from "../../components/products/services/ProductsService";
import { Container, Box } from "@mui/material";
import ProductGrid from "../../components/products/components/ProductGrid";
import AppPagination from "../../components/shared/AppPagination/AppPagination";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../components/shared/LoadingIndicator/LoadingIndicator";
import { Grid } from "@mui/material";
import { capitalizeSlug } from "../../utilities/helpers";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";

const Category = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [productsResult, setProductsResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  let breadcrumbList = [];

  useEffect(() => {
    setLoading(true);
    fetchProductsByCategorySlug(slug, currentPage, pageSize)
      .then((data) => {
        setLoading(false);
        setProductsResult(data);
      })
      .catch((error) => console.error("Failed to load products:", error));
  }, [currentPage, slug]);

  breadcrumbList = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: capitalizeSlug(slug),
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem", margin: "7rem 0" }}>
        {loading && <LoadingIndicator />}
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Breadcrumb list={breadcrumbList} />
              <h2>{capitalizeSlug(slug)}</h2>
            </Grid>

            <Grid item xs={10}>
              <ProductGrid products={productsResult.products} />
              <AppPagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                count={productsResult.count}
                pageSize={pageSize}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Category;
