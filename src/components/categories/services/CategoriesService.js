import { environment } from "../../../utilities/environment";
import { fetchPath } from "../../../utilities/fetch";


export const fetchCategories = () => {
    return fetchPath(`${environment.baseUrl}/categories`);
};