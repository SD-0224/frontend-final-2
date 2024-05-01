// import { environment } from "../../../../utilities/environment";
// import { fetchPath } from "../../../../utilities/fetch";

// export const fetchCheckoutAddress = () => {
//   return fetchPath(`${environment.baseUrl}/profile/addresses`);
// };

import { environment } from "../../../../utilities/environment";

export const fetchCheckoutAddress = async (isAuthenticated, token) => {
  try {
    if (isAuthenticated) {
      const path = `${environment.baseUrl}/profile/addresses`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the bearer token in the request headers
      };

      const response = await fetch(path, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } else {
      throw new Error("User is not authenticated.");
    }
  } catch (error) {
    console.error("Error fetching Address:", error);
    throw error;
  }
};
