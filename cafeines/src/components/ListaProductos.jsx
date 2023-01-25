import SelectorProducto from "./SelectorProducto"
import { useParams } from "react-router-dom";
import { getProductsOfCategory } from "../api/supa-service";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";

const ListaProductos = () => {
    const {categoria} = useParams();
    const [productos, setProductos] = useState([]);
    const [hayProductos, setHayProductos] = useState(true);

    useEffect(() => {
        async function obtenerProductos(){
            const { data } = await getProductsOfCategory(categoria);
            setProductos(data);
            if(data.length < 1){
                setHayProductos(false);
            }
        }
        obtenerProductos();
    },[categoria])

    return(
        <>
            {hayProductos ?
                <div className="grid grid-cols-2">
                    {productos?.map((producto) => (
                        <SelectorProducto key={producto.id} data={producto}/>
                        ))}
                </div>
            :
                <Alert severity="error">Todavía no hay productos disponibles!</Alert>        
            }
        </>
    )
}

export default ListaProductos