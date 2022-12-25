import { useParams } from "react-router-dom";
import ServicioProductos from "../services/product-service";

const FichaProducto = () => {

    const {id} = useParams();
    const productService = new ServicioProductos();
    let producto = productService.getProductoPorID(parseInt(id));

    return(
            <div className="w-full flex flex-col justify-center items-center shadow-md">
                <div className="w-full flex justify-center">
                    <img src={producto.url} className="w-full" />
                </div>
                <h2 className="mt-2 mb-2">{producto.titulo}</h2>
                <p className="mb-5">{producto.descripcion}</p>
                <h2 className="text-xl mb-2">{`${producto.precio.toFixed(2)} €`}</h2>
                
            </div>
    )
}

export default FichaProducto