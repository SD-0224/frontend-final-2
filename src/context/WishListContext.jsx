import React, { createContext, useContext, useState } from "react";
import useStorageState from "../hooks/useStorageState";

// Define the context
const WishListContext = createContext([]);

export default function WishListContextProvider({ children }) {
  const [showWishList, setShowWishList] = useState(false);
  const [WishList, setWishList] = useStorageState("WishList", []);

  // Function to toggle visibility of WishList
  const toggleShowWishList = () => {
    setShowWishList((prevShowWishList) => !prevShowWishList);
  };
  const openWishList = () => {
    setShowWishList(true);
  };

  // Function to add an item to WishList
  const addToWishList = (value) => {
    setWishList((prevWishList) => [...prevWishList, value]);
  };

  // Function to remove an item from WishList
  const removeFromWishList = (value) => {
    setWishList((prevWishList) =>
      prevWishList.filter((item) => item.id !== value.id)
    );
  };

  // Function to check if an item is in WishList
  const isInWishList = (id) => {
    return WishList.some((item) => item.id === id);
  };

  // Function to toggle an item in WishList
  const toggleWishList = (value) => {
    if (isInWishList(value.id)) {
      removeFromWishList(value);
    } else {
      addToWishList(value);
    }
    openWishList();
  };

  // Render the context provider with its value
  return (
    <WishListContext.Provider
      value={{
        WishList,
        showWishList,
        toggleShowWishList,
        isInWishList,
        toggleWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}

// Custom hook to access the WishList context
export const useWishListContext = () => {
  return useContext(WishListContext);
};