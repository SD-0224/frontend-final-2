import { useEffect } from "react";
import { useState } from "react";
import {
  fetchProductsByBrandSlug, fetchHandpicked, fetchNewArrivals,
  fetchTrendyProducts, fetchDiscountProducts, fetchLimitedProducts
} from "../../components/products/services/ProductsService";
import { Container, Box, Typography } from "@mui/material";
import ProductGrid from "../../components/products/components/ProductGrid";
import AppPagination from "../../components/shared/AppPagination/AppPagination";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../components/shared/LoadingIndicator/LoadingIndicator";
import { Grid } from "@mui/material";
import { capitalizeSlug } from "../../utilities/helpers";
import Breadcrumb from "../../components/shared/Breadcrumb/Breadcrumb";
import TitleBanner from "../../components/shared/CateogryTitleBanner/TitleBanner";


import { useMatch } from 'react-router-dom';

const ProductsList = () => {
  const { slug } = useParams();

  const matchBrand = useMatch('/products/list/brand/:slug');
  const matchNewest = useMatch('/products/list/newest');
  const matchHandpicked = useMatch('/products/list/handpicked/:slug');
  const matchTrendy = useMatch('/products/list/trendy');
  const matchDiscount = useMatch('/products/list/discount');
  const matchLimited = useMatch('/products/list/limited');



  const [loading, setLoading] = useState(false);
  const [productsResult, setProductsResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const breadcrumbList = [
    { text: "Home", link: "/" },
    { text: (matchBrand || matchHandpicked) ? capitalizeSlug(slug) : matchTrendy ? "Trendy" : matchDiscount ? "Discount" : matchLimited ? "Limited" : "Newest" },
  ];



  useEffect(() => {
    setLoading(true);
    if (matchBrand) {

      fetchProductsByBrandSlug(slug, currentPage, pageSize)
        .then((data) => {
          setLoading(false);
          setProductsResult(data);
        })
        .catch((error) => console.error("Failed to load brand products:", error));
    } else if (matchNewest) {
      fetchNewArrivals(currentPage, pageSize)
        .then((data) => {
          setLoading(false);
          setProductsResult(data);
        })
        .catch((error) => console.error("Failed to load new products:", error));
    } else if (matchHandpicked) {
      fetchHandpicked(slug, currentPage, pageSize)
        .then((data) => {
          setLoading(false);
          setProductsResult(data);
        })
        .catch((error) => console.error("Failed to load handpicked products:", error));
    } else if (matchTrendy) {
      fetchTrendyProducts(currentPage, pageSize)
        .then((data) => {
          setLoading(false);
          setProductsResult(data);
        })
        .catch((error) => console.error("Failed to load handpicked products:", error));
    } else if (matchDiscount) {
      fetchDiscountProducts(currentPage, pageSize)
        .then((data) => {
          setLoading(false);
          setProductsResult(data);
        })
        .catch((error) => console.error("Failed to load discount products:", error));
    } else if (matchLimited) {
      fetchLimitedProducts(currentPage, pageSize, 20)
        .then((data) => {
          setLoading(false);
          setProductsResult(data);
        })
        .catch((error) => console.error("Failed to load limited products:", error));
    }

  }, [currentPage, slug, matchBrand, matchNewest, matchHandpicked, matchTrendy, matchDiscount]);



  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem", margin: "7rem 0" }}>
        <Container>
          <TitleBanner />
          {loading ? (
            <LoadingIndicator />
          ) : (
            <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
              <Grid item xs={2}>
                <Breadcrumb list={breadcrumbList} />
                <h2>{breadcrumbList[1].text}</h2>

              </Grid>

              <Grid item xs={10}>
                <ProductGrid products={productsResult.products} />
                {
                  productsResult.count > 0 ?
                    <AppPagination
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                      count={productsResult.count}
                      pageSize={pageSize}
                    />
                    : <Typography variant="h5" sx={{ textAlign: "center" }}>No products found</Typography>

                }
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
};

export default ProductsList;
