import SelectorCategoria from "./SelectorCategoria"
import useSupabase from "../Hooks/useSupabase";
import { getAllProducts } from "../api/supa-service";

const  ListaCategorias = () => {

    const { loading, data, error } = useSupabase(getAllProducts);
    console.log(data)
    

    return(
        <div className="grid grid-cols-1 w-full">
        {/* {getCategorias(data).map((categoria) => (
            <SelectorCategoria key={categoria.titulo} data={categoria}/>
            ))
        } */}
        </div>
    )
}

export default ListaCategorias