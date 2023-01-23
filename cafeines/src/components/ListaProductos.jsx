import SelectorProducto from "./SelectorProducto"
import { useParams } from "react-router-dom";
import { getProductsOfCategory } from "../api/supa-service";
import { useEffect, useState } from "react";

const ListaProductos = () => {
    const {categoria} = useParams();
    const [productos, setProductos] = useState([])

    useEffect(() => {
        async function obtenerProductos(){
            const {data, error} = await getProductsOfCategory(categoria);
            setProductos(data);
            console.log(`Todos los productos de la categoría: ${categoria}`);
            console.log(data);
        }
        obtenerProductos();
    },[categoria])

    return(
        <div className="grid grid-cols-2">
            {productos?.map((producto) => (
                <SelectorProducto key={producto.id} data={producto}/>
                ))
            }
        </div>
    )
}

export default ListaProductos