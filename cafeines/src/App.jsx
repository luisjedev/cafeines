import ListaCategorias from "./components/ListaCategorias";
import ListaProductos from "./components/ListaProductos";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AgregarProducto from "./pages/AgregarProducto";
import AgregarCategoria from "./pages/AgregarCategoria";
import Administracion from "./pages/Administracion";

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<ListaCategorias/>}/>
          <Route path='/:categoria' element={<ListaProductos/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path="/nuevo_producto" element={<AgregarProducto/>} />
          <Route path="/nueva_categoria" element={<AgregarCategoria/>} />
          <Route path="/admin" element={<Administracion/>} />
          {/* <Route path='/:categoria/:id' element={<FichaProducto/>}/> */}
        </Routes>
    </>
  )
}

export default App

