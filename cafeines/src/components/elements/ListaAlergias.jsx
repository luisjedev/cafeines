import useSupabase from "../../Hooks/useSupabase";
import { getAlergias } from "../../api/supa-service";

const ListaAlergias = ({alergias}) => {

    const {loading, data, error} = useSupabase(getAlergias);
    console.log(data)

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