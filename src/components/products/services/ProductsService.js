import { fetchPath } from "./../../../utilities/fetch"
// const baseURL = "https://backend-final-2-1.onrender.com";

const baseURL = "https://fakestoreapi.com/products";


export const fetchNewArrivals = () => {
    return fetchPath(`${baseURL}?limit=10&sort=desc`);
};

// Fetch handpicked products
export const fetchHandpicked = () => {
    return fetchPath(`${baseURL}?limit=10`);
};



