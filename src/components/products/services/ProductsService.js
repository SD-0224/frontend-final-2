import { fetchPath } from "./../../../utilities/fetch"
// const baseURL = "https://backend-final-2-1.onrender.com";

const mockUrl = "https://fakestoreapi.com/products";
const baseUrl = "https://backend-final-2-1.onrender.com/products";

export const fetchProducts = (pageSize = 9, page = 1) => {
    return fetchPath(`${baseUrl}?limit=${pageSize}&page=${page}`);
};

export const fetchProductsByCategoryId = (categoryId, page = 1, pageSize = 9) => {
    return fetchPath(`${baseUrl}/category/${categoryId}?page=${page}&pageSize=${pageSize}`);
};



export const fetchNewArrivals = () => {
    return fetchPath(`${mockUrl}?limit=10&sort=desc`);
};

// Fetch handpicked products
export const fetchHandpicked = () => {
    return fetchPath(`${mockUrl}?limit=10`);
};



