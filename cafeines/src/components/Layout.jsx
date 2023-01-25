import Header from "./elements/Header"
import Footer from "./elements/Footer"

const Layout = ({Children}) => {

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