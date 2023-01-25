import SelectorCategoria from "./SelectorCategoria"
import useSupabase from "../Hooks/useSupabase";
import { getCategories} from "../api/supa-service";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

const  ListaCategorias = () => {
    const [hayCategorias, setHayCategorias] = useState(true);
    const {data} = useSupabase(getCategories);
    
    useEffect(() => {
          data && data.length < 1 && setHayCategorias(false);
    },[data])

    return(
        <>
            {hayCategorias ?
                <div className="grid grid-cols-1 w-full">
                    {data?.map((categoria) => (
                        <SelectorCategoria key={categoria.nombre} data={categoria}/>
                    ))} 
                </div>
            :   
                <Alert severity="error">Se ha producido un error al cargar la carta, inténtelo más tarde</Alert>        
            }
        
        </>
    )
}

export default ListaCategorias