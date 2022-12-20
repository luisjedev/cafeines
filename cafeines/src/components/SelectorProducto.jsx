import { Link } from 'react-router-dom'
import Titulo from './elements/Titulo'

const SelectorProducto = ({data}) => {


    return(
        <div className="w-[100%] h-auto flex justify-center items-center p-1">
            <Link to={`${data.id}`} className="w-[100%] h-[auto] bg-white flex flex-col justify-around items-center pb-2 shadow-md">
                <div className="w-[100%] h-[100%] flex justify-center items-center">
                    <img src={data.url} className="w-[100%] h-[150px] min-w-[150px] min-h-[150px] max-w-[200px]"/>
                </div>
                <Titulo titulo={data.titulo}/> 
                <div className="w-full h-auto flex justify-center">
                    <p className="p-2 text-sm truncate text-amber-900">{data.descripcion}</p>
                </div>
                <h4 className="text-amber-900 fuente_principal_normal">{data.precio.toFixed(2)}</h4>
            </Link>
        </div>
    )
}

export default SelectorProducto