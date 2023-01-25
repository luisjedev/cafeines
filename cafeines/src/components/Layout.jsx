import Header from "./elements/Header"
import Footer from "./elements/Footer"
import { useEffect } from "react";
import { setAlergiasStorage } from "../utils/storage";
import useSupabase from "../Hooks/useSupabase";
import { getAlergias } from "../api/supa-service";

const Layout = ({Children}) => {
    const alergias = useSupabase(getAlergias);

    useEffect(() => {
        alergias.data && setAlergiasStorage(alergias.data);
    },[alergias])

    return(
        <div className="flex flex-col justify-between h-screen">
            <Header/>
                <div className="flex flex-col justify-center items-center bg-gray-50 mb-auto">
                    <div className='w-[100%] h-[100%] bg-gray-50 p-5 pt-0 flex justify-center items-center'>
                        {Children}
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Layout