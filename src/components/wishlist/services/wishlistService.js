import { environment } from "../../../utilities/environment";


export const fetchWishList = async (isAuthenticated) => {
    try {
        // Append authentication details if user is authenticated
        if (isAuthenticated) {
            const path = `${environment.baseUrl}/wishList/`;
            const response = await fetch(path, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // Check response status
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }
    } catch (error) {
        return error;
    }
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