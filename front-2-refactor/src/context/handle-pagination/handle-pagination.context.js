import { createContext, useState } from "react";
import { images } from './../../data/image';

const HandlePaginationContext = createContext(null)

const HandlePaginationContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPages] = useState(30)
  
    // Calculer les indices des images pour la page actuelle
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const getCurrentPage = () => currentPage;
    const goToPage = (pageNumber) => setCurrentPage(pageNumber);
    const getTotalPages = () => Math.ceil(images.length / itemsPerPage)
    const getCurrentImages = () => images.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <HandlePaginationContext.Provider value={{
            getCurrentPage,
            goToPage,
            getTotalPages,
            getCurrentImages,
            setItemsPerPages
        }}>
            {children}
        </HandlePaginationContext.Provider>
    )
}

export { HandlePaginationContext, HandlePaginationContextProvider}