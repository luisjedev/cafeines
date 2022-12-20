import ListaCategorias from "./components/ListaCategorias";
import ListaProductos from "./components/ListaProductos";
import { Link, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
      <div className='w-[100%] h-[100%] bg-gray-50 p-5 flex justify-center items-center'>
        <Routes>
          <Route path='/' element={<ListaCategorias/>}/>
          <Route path='/:categoria' element={<ListaProductos/>} />
          {/* <Route path='/:categoria/:id' element={<FichaProducto/>}/> */}
        </Routes>
      </div>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Categorias</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default App

