import SelectorCategoria from "./SelectorCategoria"
import ServicioProductos from "../services/product-service"

const  ListaCategorias = () => {

    const productService = new ServicioProductos();

    return(
        <div className="grid grid-cols-1 w-full">
        {productService.getCategorias().map((categoria) => (
            <SelectorCategoria key={categoria.titulo} data={categoria}/>
            ))
        }
        </div>
    )
}

export default ListaCategorias