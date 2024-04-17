import { useEffect, useState } from "react";
import data from '../data/productos.json'
import ItemList from "./itemList";


function ItemListContainer() {

    const [productos, setProductos] = useState([])
    

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
    }, [])


  return (
    <div className=" grid mt-5 p-11 gap-36 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {   
            productos.length > 0 && 
            productos.map((producto) => {
                return (
                    <ItemList key={producto.id} producto={producto}/>
                )
            })
        }
    </div>
  )

}

export default ItemListContainer;