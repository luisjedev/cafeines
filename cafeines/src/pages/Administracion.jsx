import { useEffect } from "react"
import { getToken } from "../utils/storage"
import { Link, useNavigate } from "react-router-dom"
import Titulo from "../components/elements/Titulo";

const Administracion = () => {
    const navigate = useNavigate();

    const OPCIONES = [
        "nuevo_producto",
        "nueva_categoria",
        "login"
    ]
    

    useEffect(() => {
        const token = getToken();
        if(!token){
            navigate('/login')
        }
    },[])

    return(
        <div className="grid grid-cols-2 w-full">
            {OPCIONES.map((opcion) => (
                <Link to={`../${opcion}`}>
                    <div key={opcion} className="h-[5rem] bg-white p-1 shadow-md flex justify-center items-center m-1">
                        <Titulo titulo={opcion.replace("_", " ")}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Administracion