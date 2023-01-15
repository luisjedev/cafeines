import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { supabase } from "../lib/supaBase";
import useSupabase from "../Hooks/useSupabase";
import { getAlergias, getCategories } from "../api/supa-service";

const AgregarProducto = () => {
    const navigate = useNavigate();

    const categorias = useSupabase(getCategories);
    console.log(categorias.data);
    const alergias = useSupabase(getAlergias);
    console.log(alergias.data)
    
    useEffect(() => {
        supabase.auth.onAuthStateChange((e, session) => {
            console.log(e, session)
            if(!session){
                navigate('/login')
            }else{
                console.log("Estoy logueado");
            }
        })
    },[])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }


    return(
        <div className="w-full text-center">
            <h2 className="mb-5">Nuevo producto</h2>
            <form onSubmit={handleSubmit} className="w-full p-2 flex justify-center items-center flex-col">
                <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
                placeholder="Nombre.."
                type="text"
                name="nombre"
                onChange={e => setEmail(e.target.value)}
                />
                <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
                placeholder="Descripción.."
                type="text"
                name="descripcion"
                onChange={e => setPassword(e.target.value)}
                />
                <input className="border-amber-900 border-2 mb-5 p-1 text-center w-[80%]"
                placeholder="Precio.."
                type="number" 
                name="precio"
                />
                <h2 className="mb-2 text-2xl">Categoría</h2>
                <select className="border-amber-900 border-2 mb-5 p-1 text-center w-[80%] ">
                    {categorias.data?.map((categoria) => (
                        <option key={categoria.id} value={categoria.name}>{categoria.name}</option>
                    ))}
                </select>
                <h2 className="mb-2 text-2xl">Alergias</h2>
                <div className="grid grid-cols-2 mb-5 w-full">
                    {alergias.data?.map((alergia) => (
                        <div key={alergia.id} className="grid grid-cols-2 p-1 m-0">
                            <label className="text-start p-0 m-0 truncate flex">{alergia.name}</label>
                            <input type="checkbox" defaultValue="false" className="accent-amber-900"/>
                        </div>
                    ))}
                </div>
                <button className="h-10 w-24 text-white border-2 mt-2 border-amber-900 hover:bg-white hover:text-amber-900 bg-amber-900">
                    Agregar
                </button>
            </form>
        </div>
    )
}

export default AgregarProducto;