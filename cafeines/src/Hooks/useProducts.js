import { supabase } from "../supabase/client"

export const getAllProducts = async () => {

    try {
        const listaProductos = await supabase
        .from('productos')
        .select('*')    
        
        return listaProductos.data
    } catch (error) {
        console.log(error)
    }
}