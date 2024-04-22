import { fetchPath } from "./../../../utilities/fetch";
import { environment } from "./../../../utilities/environment";

export const fetchProducts = (pageSize = 9, page = 1) => {
  return fetchPath(`${environment.baseUrl}/products/search?limit=${pageSize}&page=${page}`);
};

export const fetchProductsByCategorySlug = (slug, page = 1, pageSize = 9) => {
  return fetchPath(`${environment.baseUrl}/products/category/${slug}?page=${page}&limit=${pageSize}`);
};
export const fetchProductsByBrandSlug = (slug, page = 1, pageSize = 9) => {
  return fetchPath(`${environment.baseUrl}/products/brand/${slug}?page=${page}&limit=${pageSize}`);
};

export const fetchNewArrivals = (page = 1, limit = 4) => {
  return fetchPath(`${environment.baseUrl}/products/new?page=${page}&limit=${limit}`);
};

export const fetchHandpicked = (page = 1, limit = 4) => {
  return fetchPath(`${environment.baseUrl}/products/handpicked/skin-care?page=${page}&limit=${limit}`);
};

export const fetchBrands = () => {
  return fetchPath(`${environment.baseUrl}/brands/`);
};
