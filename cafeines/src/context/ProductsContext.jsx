import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client"

export const ProductsContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if(!context){
        throw new Error("No hay contexto");
    }
    return context
}

export const ProductsContextProvider = ({children}) => {
    const [listaProductos, setListaProductos] = useState([{}])

    useEffect(() => {
        async function getProducts(){
            const productosObtenidos = await supabase
            .from('productos')
            .select('*')

            setListaProductos(productosObtenidos.data)
        }
        getProducts();
    },[])


    return (
        <ProductsContext.Provider value={{listaProductos}}>
            {children}
        </ProductsContext.Provider>
    )
}