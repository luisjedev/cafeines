import { Link } from 'react-router-dom'
import Titulo from './elements/Titulo'

const SelectorCategoria = ({data}) =>{

    return(
        <div className="w-[100%] h-auto flex justify-center items-center p-1">
            <Link to={`/${data.nombre}`} className="flex flex-row justify-around items-center w-[100%] h-[6rem] p-1 shadow-md bg-white">
                <div className="w-[30%] h-[100%] flex justify-center items-center">
                    <img src={data.url} className="w-[70px] rounded-full min-w-[73px] min-h-[70px] h-[70px]"/>
                </div>
                <div className="ml-1 w-[70%]">
                    <Titulo titulo={data.nombre} />
                </div>
            </Link>
        </div>
    )
}


export default SelectorCategoria