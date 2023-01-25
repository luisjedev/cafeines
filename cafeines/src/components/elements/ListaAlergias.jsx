import useSupabase from "../../Hooks/useSupabase";
import { getAlergias } from "../../api/supa-service";
import { Box, CircularProgress } from "@mui/material";

const ListaAlergias = ({alergias}) => {

    const {data} = useSupabase(getAlergias);

    return (
        <div className="flex justify-center items-center">
            {data? data.map((alergia) => (
                alergias.includes(alergia.name) &&
                <div key={alergia.id} className="ml-2 mr-1">
                    <img src={alergia.url} className="w-[40px]"/>
                </div>
            ))
            :
            <div className="h-[56.56px] w-full">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress/>
                </Box>
            </div>
            }
        </div>
    )
}

export default ListaAlergias;