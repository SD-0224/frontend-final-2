import { useEffect } from "react";
import { useState } from "react";
import { fetchProducts, fetchProductsByCategoryId } from "../../components/products/services/ProductsService";
import { Container } from "@mui/material";
import ProductGrid from "../../components/products/components/ProductGrid";
import AppPagination from "../../components/shared/AppPagination/AppPagination"
import { useParams } from "react-router-dom";

const Category = () => {

    const { categoryId } = useParams();

    const [productsResult, setProductsResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);


    useEffect(() => {
        fetchProductsByCategoryId(categoryId, currentPage, pageSize)
            .then(data => {
                setProductsResult(data);
            })
            .catch(error => console.error('Failed to load products:', error));
    }, [currentPage]);
    useEffect(() => {
        console.log(productsResult);
    }, [productsResult]);





    return (
        <>
            <Container>
                <ProductGrid products={productsResult.products} />
                <AppPagination
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    count={productsResult.count}
                    pageSize={pageSize}

                />
            </Container>
        </>
    );
}

export default Category;