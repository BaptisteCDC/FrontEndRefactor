import { useContext } from "react"
import { HandlePaginationContext } from "../context"

const usePaginationContext = () => {
    const context = useContext(HandlePaginationContext);
    if(!context) {
        throw new Error('HandlePaginationContext must be used within a HandlePaginationContextProvider')
    }

    return context
}

export { usePaginationContext };