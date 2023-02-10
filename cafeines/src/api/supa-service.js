import { supabase } from "../lib/supaBase";

export const getAllProducts = async() => {
    let { data, error } = await supabase.from("productos").select("*");
    return { data, error };
};


export const getProductsOfCategory = async(categoria) => {
    let { data, error } = await supabase.from("productos").select("*").eq("categoria", categoria);
    return { data, error };
}

export const getCategories = async() => {
    let { data, error } = await supabase.from("categorias").select("*");
    return { data, error };
}


export const getAlergias = async() => {
    let { data, error } = await supabase.from("alergenos").select("*");
    return { data, error };
}

export const insertCategory = async(values) => {
    const { error } = await supabase
        .from("categorias")
        .insert(values);

    if (!error) {
        alert("Categoría añadida correctamente")
    }
}

export const insertProduct = async(values) => {
    const { error } = await supabase
        .from("productos")
        .insert(values);

    if (!error) {
        alert("Producto añadido correctamente")
    }
}