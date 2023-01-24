import { Link } from 'react-router-dom'

const SelectorCategoria = ({data}) =>{

    return(
        <div className="w-[100%] h-auto flex justify-center items-center p-1">
            <Link to={`/${data.nombre}`} className="flex flex-row justify-center items-center w-[100%] h-[4.5rem] p-1 shadow-md bg-white">
                <div className="w-[30%] h-[100%] flex justify-center items-center">
                    <img src={data.url} className="w-[60px] rounded-full min-w-[60px] min-h-[55px] h-[55px]"/>
                </div>
                <div className="ml-1 w-[70%] flex justify-start">
                <div className="w-full flex justify-center items-center mt-2 pl-2 pr-2">
                    <h2 className="text-2xl text-amber-900 text-center truncate">{data.nombre}</h2>
                </div>
                </div>
            </Link>
        </div>
    )
}


export default SelectorCategoria