import { createContext, useContext, useEffect, useState } from "react";
import { fetchCategories } from "../components/categories/services/CategoriesService";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Failed to fetch categories:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>{children}</CategoriesContext.Provider>
  );
};

export function useCategoriesContext() {
  return useContext(CategoriesContext);
}
