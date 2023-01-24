import SelectorCategoria from "./SelectorCategoria"
import useSupabase from "../Hooks/useSupabase";
import { getCategories } from "../api/supa-service";

const  ListaCategorias = () => {

    const {loading, data, error} = useSupabase(getCategories);
    console.log("Todas las categorías:");
    console.log(data);

    return(
        <div className="grid grid-cols-1 w-full">
        {data?.map((categoria) => (
            <SelectorCategoria key={categoria.nombre} data={categoria}/>
        ))} 
        </div>
    )
}

export default ListaCategorias