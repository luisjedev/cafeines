import ListaCategorias from "./components/ListaCategorias";
import ListaProductos from "./components/ListaProductos";
import { Route, Routes } from "react-router-dom";
import { getAllProducts } from "./services/productService";
import Login from "./pages/Login";

function App() {

  getAllProducts();

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
      <div className='w-[100%] h-[100%] bg-gray-50 p-5 flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<ListaCategorias/>}/>
          <Route path='/:categoria' element={<ListaProductos/>} />
          <Route path='/administracion' element={<Login/>} />
          {/* <Route path='/:categoria/:id' element={<FichaProducto/>}/> */}
        </Routes>
      </div>
    </div>
  )
}

export default App

