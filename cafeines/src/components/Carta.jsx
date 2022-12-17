import Titulo from "./elements/Titulo"
import Imagen from "./elements/Imagen"
import Descripcion from "./elements/Descripcion"


const Carta = ({tipo, data}) => {

    return(
        <div className="w-auto h-auto flex justify-center items-center p-1">
            {tipo === "categoria" ?
            <div id="fondo_categoria" className={`w-[200px] h-[200px] bg-no-repeat flex justify-center items-center bg-[url('${data.imagen}')] bg-cover`}>
                <Titulo titulo={data.titulo}/>
            </div>
            :
            <div className="w-[200px] h-[200px] bg-amber-200 flex flex-col justify-around items-center">
                <Titulo titulo={data.titulo}/>
                <Imagen imagen={data.imagen}/>
                <Descripcion descripcion={data.descripcion}/>
            </div>
            }
        </div>
    )
}

export default Carta