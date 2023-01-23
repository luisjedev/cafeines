import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import useSupabase from "../Hooks/useSupabase";
import { getAlergias, getCategories, insertProduct } from "../api/supa-service";
import { getToken } from "../utils/storage";


const AgregarProducto = () => {
    const navigate = useNavigate();

    const categoriasDisponibles = useSupabase(getCategories);
    const alergiasDisponibles = useSupabase(getAlergias);

    const [productForm, setProductForm] = useState({
        nombre: "",
        precio: 0,
        descripcion: "",
        categoria: "",
        url: "",
        alergias: []
    })

    const { nombre, precio, descripcion, categoria, url} = productForm;
    
    useEffect(() => {
        const token = getToken();

        if(!token){
            navigate('/login')
        }else{
            console.log("Estoy logueado");
        }
        
    },[])

    const isDisabled = !nombre || !precio || !descripcion || !categoria;

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await insertProduct(productForm);

        setProductForm({
            nombre: "",
            precio: 0,
            descripcion: "",
            categoria: "",
            url: "",
            alergias: []
        })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setProductForm({...productForm, [e.target.name]: e.target.value});
    }

    const handleCheckboxChange = (e) => {
        setProductForm(prev => {
            if(e.target.checked){
                return {
                    ...prev,
                    alergias: [...prev.alergias, e.target.value]
                }
            }else{
                return {
                    ...prev,
                    alergias: prev.alergias.filter((alergia) => alergia !== e.target.value)
                }
            }
        })
    }


    return(
        <div className="w-full text-center">
            <h2 className="mb-3">Nuevo producto</h2>
            <form onSubmit={handleSubmit} className="w-full p-2 flex justify-center items-center flex-col">
                <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
                placeholder="Nombre.."
                type="text"
                name="nombre"
                onChange={handleChange}
                value={nombre}
                />
                <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
                placeholder="Descripción.."
                type="text"
                name="descripcion"
                onChange={handleChange}
                value={descripcion}
                />
                <input className="border-amber-900 border-2 mb-3 p-1 text-center w-[80%]"
                placeholder="Precio.."
                type="number" 
                name="precio"
                step="any"
                onChange={handleChange}
                value={precio}
                />
                <input className="border-amber-900 border-2 mb-2 p-1 text-center w-[80%]" 
                placeholder="Url imagen.."
                type="text"
                name="url"
                onChange={handleChange}
                value={url}
                />
                <h2 className="mb-2 text-2xl">Categoría</h2>
                <select className="border-amber-900 border-2 mb-3 p-1 text-center w-[60%]"
                name="categoria"
                onChange={handleChange}
                value={categoria || "seleccionar"}
                >
                    <option value="seleccionar">--Seleccionar--</option>
                    {categoriasDisponibles.data?.map((categoria) => (
                        <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option>
                    ))}
                </select>
                <h2 className="mb-2 text-2xl">Alergias</h2>
                <div className="grid grid-cols-2 mb-5 w-full text-center">
                    {alergiasDisponibles.data?.map((alergia) => (
                        <div key={alergia.id} className="flex items-center justify-around p-1 m-0 mb-1 h-auto w-[10rem]">
                            <label className="truncate w-[5rem]">{alergia.name}</label>
                            <input className="accent-amber-900 h-[35px] w-[35px]"
                                type="checkbox"
                                checked={productForm.alergias.includes(alergia.name)}
                                value={alergia.name}
                                onChange={handleCheckboxChange}/>
                        </div>
                    ))}
                </div>
                <button 
                className="disabled:text-white disabled:bg-slate-400 disabled:border-gray-200 h-10 w-24 text-white border-2 mt-2 border-amber-900 hover:bg-white hover:text-amber-900 bg-amber-900"
                    disabled={isDisabled}
                >
                    Agregar
                </button>
            </form>
        </div>
    )
}

export default AgregarProducto;