import { getAlergias } from "../../utils/storage";

const ListaAlergias = ({alergias}) => {
    const data = getAlergias();

    return (
        <div className="flex justify-center items-center">
            {data?.map((alergia) => (
                alergias.includes(alergia.name) &&
                <div key={alergia.id} className="ml-2 mr-1">
                    <img src={alergia.url} className="w-[40px]"/>
                </div>
            ))}
        </div>
    )
}

export default ListaAlergias;