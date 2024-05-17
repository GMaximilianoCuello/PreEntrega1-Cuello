import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { getItems } from "../utils";

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {

        getItems()
        .then((resultados)=>{
            setProductos(resultados)
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