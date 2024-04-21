import { fetchPath } from "./../../../utilities/fetch";
import { environment } from "./../../../utilities/environment";

export const fetchProducts = (pageSize = 9, page = 1) => {
  return fetchPath(`${environment.baseUrl}/products/search?limit=${pageSize}&page=${page}`);
};

export const fetchProductsByCategorySlug = (slug, page = 1, pageSize = 9) => {
  return fetchPath(`${environment.baseUrl}/products/category/${slug}?page=${page}&limit=${pageSize}`);
};

export const fetchNewArrivals = () => {
  return fetchPath(`${environment.baseUrl}/products/new`).then((data) => data.products);
};

export const fetchHandpicked = () => {
  return fetchPath(`${environment.baseUrl}/products/handpicked/skin-care`).then((data) => data.products);
};

export const fetchBrands = () => {
  return fetchPath(`${environment.baseUrl}/brands/`).then((data) => data);
};
