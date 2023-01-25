import Titulo from './elements/Titulo'
import { useState } from 'react';
import ModalProducto from './ModalProducto';

const SelectorProducto = ({data}) => {
    const [abrirModal, setAbrirModal] = useState(false);
    const URL_IMAGEN_VACIA = "https://res.cloudinary.com/dal8nbv6k/image/upload/v1674475326/cafeInes/recursos/vacio.png"

    const onHandleClick = () =>{
        setAbrirModal(prev => !prev);
    }


    return(
            <div className="w-[100%] h-auto flex flex-col justify-center items-center p-1">
                <button onClick={onHandleClick} className="w-[100%] h-[auto] bg-white flex flex-col justify-around items-center pb-2 shadow-md">
                    <div className="w-[100%] h-[100%] flex justify-center items-center">
                        {data.url !== null && data.url !== "" ?
                            <img src={data.url} className="w-[100%] h-[150px] min-w-[120px] min-h-[120px] max-w-[200px]"/>
                        :
                            <img src={URL_IMAGEN_VACIA} className="w-[100%] h-[150px] min-w-[150px] min-h-[150px] max-w-[200px]"/>
                        }
                    </div>
                    <Titulo titulo={data.nombre}/> 
                    <div className="w-full h-auto flex justify-center">
                        <p className="pr-2 pl-2 text-sm truncate text-amber-900">{data.descripcion}</p>
                    </div>
                    <h4 className="text-amber-900 fuente_principal_normal">{data.precio.toFixed(2)} €</h4>
                </button>
                {abrirModal && <ModalProducto mostrarModal={abrirModal} data={data} ocultarModal={onHandleClick} url_vacia={URL_IMAGEN_VACIA}/>}
            </div>
    )
}

export default SelectorProducto