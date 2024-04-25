import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchWishList, toggleWishlistItem } from "../components/wishlist/services/wishlistService";
import { useAuthenticatedUserContext } from "./AuthenticatedUserContext";

// Define the context
const WishlistContext = createContext();

const products = [
  {
    productID: 11,
    title: "Mascara-2",
    subTitle: "Volumizing mascara",
    price: 12.99,
    discount: 0.25,
    slug: "mascara-2",
    brandName: "Chanel",
    "brand-slug": "chanel",
    category: "Apparels",
    "category-slug": "apparels",
    avgReview: 0,
    reviewCount: 0,
    imgPath:
      "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
  },
  {
    productID: 12,
    title: "Mascara-3",
    subTitle: "Volumizing mascara",
    price: 12.99,
    discount: 0.15,
    slug: "mascara-3",
    brandName: "Chanel",
    "brand-slug": "chanel",
    category: "Apparels",
    "category-slug": "apparels",
    avgReview: 0,
    reviewCount: 0,
    imgPath:
      "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
  },
  {
    productID: 8,
    title: "Eyeliner",
    subTitle: "Waterproof eyeliner pen",
    price: 9.99,
    discount: 0,
    slug: "eyeliner",
    brandName: "Burberry",
    "brand-slug": "burberry",
    category: "Handbags",
    "category-slug": "handbags",
    avgReview: 2.75,
    reviewCount: 2,
    imgPath:
      "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
  },
  {
    productID: 6,
    title: "Foundation",
    subTitle: "Matte finish foundation",
    price: 115.99,
    discount: 0.05,
    slug: "foundation",
    brandName: "Louis Vuitton",
    "brand-slug": "louis-vuitton",
    category: "Handbags",
    "category-slug": "handbags",
    avgReview: 4,
    reviewCount: 2,
    imgPath:
      "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
  },
  {
    productID: 10,
    title: "Mascara",
    subTitle: "Volumizing mascara",
    price: 12.99,
    discount: 0.35,
    slug: "mascara",
    brandName: "Chanel",
    "brand-slug": "chanel",
    category: "Apparels",
    "category-slug": "apparels",
    avgReview: 3.75,
    reviewCount: 2,
    imgPath:
      "https://algopix.com/products/_next/image?url=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F31cRtbZrpbL._SL400_.jpg&w=828&q=75",
  },
];

const WishlistData = [
  {
    image: "/images/school.jpg",
    productTitle: "coach",
    productSubtitle: "Leather Coach Bag",
  },
  {
    image: "../../../../public/images/image.svg",
    productTitle: "coach",
    productSubtitle: "Leather Coach Bag",
  },
  {
    image: "../../../../public/images/image.svg",
    productTitle: "coach",
    productSubtitle: "Leather Coach Bag",
  },
];

export default function WishlistContextProvider({ children }) {
  const [showWishlist, setShowWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Wishlist, setWishlist] = useState([]);

  const { isAuthenticated } = useAuthenticatedUserContext();
  console.log('isAuthenticated ' + isAuthenticated);

  useEffect(() => {
    setIsLoading(true);
    fetchWishList(isAuthenticated)
      .then((data) => {
        setWishlist(data);
      })
      .catch((error) => {
        console.error("Failed to fetch Wishlist:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isAuthenticated]);

  // Function to toggle visibility of Wishlist
  const toggleShowWishlist = () => {
    setShowWishlist((prevShowWishlist) => !prevShowWishlist);
  };
  const openWishlist = () => {
    setShowWishlist(true);
  };
  const closeWishlist = () => {
    setShowWishlist(false);
  };

  // Function to check if an item is in Wishlist
  const isInWishlist = (id) => {
    return Wishlist.some((item) => item.productID === id);
  };

  // Function to add or remove an item from Wishlist
  const toggleWishlist = async (productId) => {
    try {
      const updatedWishlist = await toggleWishlistItem(productId);
      setWishlist(updatedWishlist);
    } catch (error) {
      console.error("Failed to toggle Wishlist item:", error);
    }
  };

  // Render the context provider with its value
  return (
    <WishlistContext.Provider
      value={{
        Wishlist,
        showWishlist,
        toggleShowWishlist,
        isInWishlist,
        toggleWishlist,
        closeWishlist,
        openWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook to access the Wishlist context
export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
