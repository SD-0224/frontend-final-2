import { environment } from "../../../utilities/environment";
import { fetchPath } from "../../../utilities/fetch";

export const fetchWishlist = () => {
    return fetchPath(`${environment.baseUrl}/wishList/2`);
};


// Function to toggle a wishlist item in the backend API
export const toggleWishlistItem = async (productId) => {
    try {
        const response = await fetch(`${environment.baseUrl}/wishList/toggle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID: 2, // Assuming the user ID is 2
                productID: productId,
            }),
        });
        if (!response.ok) {
            throw new Error('Failed to toggle wishlist item');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to toggle wishlist item: ' + error.message);
    }
};