import { fetchPath } from "./../../../utilities/fetch"
import { environment } from "./../../../utilities/environment"

export const fetchProducts = (pageSize = 9, page = 1) => {
    return fetchPath(`${environment.baseUrl}/products/search?limit=${pageSize}&page=${page}`);
};

export const fetchProductsByCategoryId = (categoryId, page = 1, pageSize = 9) => {
    return fetchPath(`${environment.baseUrl}/products/category/${categoryId}?page=${page}&limit=${pageSize}`);
};



export const fetchNewArrivals = () => {
    return fetchPath(`${environment.mockUrl}/products?limit=10&sort=desc`);
};

// Fetch handpicked products
export const fetchHandpicked = () => {
    return fetchPath(`${environment.mockUrl}/products?limit=10`);
};



