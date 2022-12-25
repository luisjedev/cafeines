import ListaProductos from '../data/productos.json'

class ServicioProductos{

    
    getListaProductos(){
        return ListaProductos.lista_productos
    }
    
    getProductosPorCategoria(categoria){
        return ListaProductos?.lista_productos
        .filter((producto) => producto.categoria === categoria)
    }
    
    getProductoPorID(id){
        return ListaProductos?.lista_productos.find((producto) =>{
            if(producto.id === id){
                return producto;
            }
        })
    }
    
    getAlergias(id){
       return this.getProductoPorID(id).alergias
    }

    getCategorias(){
        return ListaProductos?.lista_productos.map((producto) => {
            return(
                {
                    "titulo" : producto.categoria,
                    "url" : producto.url
                }
            )
        }).filter((categoria, index, listaCategoriaDuplicadas) => {
            return listaCategoriaDuplicadas
            .findIndex((value) => value.titulo === categoria.titulo) === index
        })

    }
}

export default ServicioProductos