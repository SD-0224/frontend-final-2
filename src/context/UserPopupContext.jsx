import React, { createContext, useContext, useState } from "react";

// Define the context
const UserPopupContext = createContext();

export default function UserPopupContextProvider({ children }) {
  const [showUserPopup, setShowUserPopup] = useState(false);

  const toggleUserPopup = () => {
    setShowUserPopup((prev) => !prev);
  };
  const openUserPopup = () => {
    setShowUserPopup(true);
  };
  const closeUserPopup = () => {
    setShowUserPopup(false);
  };

  return (
    <UserPopupContext.Provider
      value={{
        showUserPopup,
        openUserPopup,
        closeUserPopup,
        toggleUserPopup,
      }}
    >
      {children}
    </UserPopupContext.Provider>
  );
}

// Custom hook to access the UserPopup context
export const useUserPopupContext = () => {
  return useContext(UserPopupContext);
};
