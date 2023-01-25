import { useState, useEffect } from "react";
import { getToken } from "../utils/storage";
import { useNavigate } from "react-router-dom"
import { insertCategory } from "../api/supa-service";

const AgregarCategoria = () => {
    const [nombre, setNombre] = useState("");
    const [url, setUrl] = useState("");
    const navigate = useNavigate();
    const isDisabled = !nombre;

    useEffect(() => {
        const token = getToken();
        if(!token){
            navigate('/login')
        }
    },[])

    const handleChange = (e) => {
        if(e.target.name === "nombre"){
            setNombre(e.target.value);
        }else if(e.target.name === "url"){
            setUrl(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await insertCategory({
            nombre : nombre,
            url: url
        })

        setNombre("");
        setUrl("");
    }

    return(
        <div className="w-full text-center">
            <h2 className="mb-3">Nueva Categoría</h2>
            <form onSubmit={handleSubmit} className="w-full p-2 flex justify-center items-center flex-col">
                <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
                placeholder="Nombre.."
                type="text"
                name="nombre"
                onChange={handleChange}
                value={nombre}
                />

                <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
                placeholder="Url imagen.."
                type="text"
                name="url"
                onChange={handleChange}
                value={url}
                />
                
                <button 
                className="disabled:text-white disabled:bg-slate-400 disabled:border-gray-200 h-10 w-24 text-white border-2 mt-2 border-amber-900 hover:bg-white hover:text-amber-900 bg-amber-900"
                    disabled={isDisabled}
                >
                    Añadir
                </button>
            </form>
        </div>
    )
}

export default AgregarCategoria;