import { supabase } from "../lib/supaBase";

export const getAllProducts = async () => {
    let { data, error } = await supabase.from("productos").select("*");
    return { data, error };
  };


export const getProductsOfCategory = async (categoria) => {
    let { data, error } = await supabase.from("productos").select("*").eq("categoria", categoria);
    return { data, error };
}

export const getCategories = async () => {
    let { data, error } = await supabase.from("categorias").select("*");
    return { data, error};
}


export const getAlergias = async () => {
    let { data, error } = await supabase.from("alergenos").select("*");
    return { data, error };
}

export const insertCategory = async (values) => {
    const { error } = await supabase
    .from("categorias")
    .insert(values);

    if(!error){
        alert("Categoría añadida correctamente")
    }
}

export const insertProduct = async (values) =>{
    const { error } = await supabase
    .from("productos")
    .insert(values);

    if(!error){
        alert("Producto añadido correctamente")
    }
}

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

export const getAlergiasOld = (id) => {
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