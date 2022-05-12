import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

//the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setcategoriesMap] = useState({});

    // How to use async functions within useEffect.
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();

            setcategoriesMap(categoryMap);
        } 
        getCategoriesMap();
    }, []);
    
    // ##### Used for uploading the categories collection along with the documents
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const value = { categoriesMap };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};



