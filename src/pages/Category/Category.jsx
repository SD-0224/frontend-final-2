import { useEffect } from "react";
import { useState } from "react";
import { fetchProducts, fetchProductsByCategoryId } from "../../components/products/services/ProductsService";
import { Container } from "@mui/material";
import ProductGrid from "../../components/products/components/ProductGrid";
import AppPagination from "../../components/shared/AppPagination/AppPagination"
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../components/shared/LoadingIndicator/LoadingIndicator";

const Category = () => {

    const { categoryId } = useParams();
    const [loading, setLoading] = useState(false);
    const [productsResult, setProductsResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);


    useEffect(() => {
        setLoading(true);
        fetchProductsByCategoryId(categoryId, currentPage, pageSize)
            .then(data => {
                setLoading(false);
                setProductsResult(data);
            })
            .catch(error => console.error('Failed to load products:', error));
    }, [currentPage]);
    useEffect(() => {
        console.log(productsResult);
    }, [productsResult]);

    return (
        <>
            {loading ? (
                <LoadingIndicator />
            ) : (
                <Container>
                    <ProductGrid products={productsResult.products} />
                    <AppPagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        count={productsResult.count}
                        pageSize={pageSize}
                    />
                </Container>
            )}
        </>
    );
}

export default Category;