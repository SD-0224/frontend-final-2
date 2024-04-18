import { createContext, useContext, useEffect, useState } from 'react';
import { fetchCategories } from '../components/categories/services/CategoriesService';
const CategoriesContext = createContext();


export const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    );
}

export function useCategoriesContext() {
    return useContext(CategoriesContext);
}