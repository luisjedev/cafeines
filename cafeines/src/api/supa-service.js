import { supabase } from "../lib/supaBase";

export const getAllProducts = async () => {
    let { data, error } = await supabase.from("productos").select("*");
    return { data, error };
  };



//PASAR ESTAS FUNCIONES A LLAMADAS ESPECÍFICAS

  
    
export const getListaProductos = (listaProductos) => {
    return listaProductos
}

export const getProductosPorCategoria = (listaProductos,categoria) => {
    return listaProductos
    ?.filter((producto) => producto.categoria === categoria)
}

export const getProductoPorID = (listaProductos, id) => {
    return listaProductos.find((producto) =>{
        if(producto.id === id){
            return producto;
        }
    })
}

export const getAlergias = (id) => {
   return getProductoPorID(id).alergias
}

export const getCategorias = (listaProductos) => {
    return listaProductos?.map((producto) => {
        return(
            {
                "nombre" : producto.categoria,
                "url" : producto.url
            }
        )
    }).filter((categoria, index, listaCategoriaDuplicadas) => {
        return listaCategoriaDuplicadas
        .findIndex((value) => value.nombre === categoria.nombre) === index
    })

}