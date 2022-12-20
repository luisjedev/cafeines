import SelectorProducto from "./SelectorProducto"
import ServicioProductos from "../services/product-service"
import { useParams } from "react-router-dom";

const ListaProductos = () => {

    const productService = new ServicioProductos();
    const {categoria} = useParams();

    return(
        <div className="grid grid-cols-2">
            {productService.getListaProductos().map((producto) => (
                producto.categoria === categoria &&
                <SelectorProducto key={producto.id} data={producto}/>
                ))
            }
        </div>
    )
}

export default ListaProductos