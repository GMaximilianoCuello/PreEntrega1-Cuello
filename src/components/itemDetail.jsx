
import { toast } from "react-toastify"
import ItemCount from "./cantidad";
import useCart from "../hooks/useCart";


function Item ({item}) {

    const valorActual = useCart()

    const handleConfirm = (cantidad) => {
        if (cantidad > 0) {
            valorActual.agregarAlCarro(cantidad, item)
            toast.success("Se agrego un producto al carrito!", {
                position: "top-center",
                autoClose: 2000,
                theme: "colored"
            })

        } else {
            toast.error("Ups! no se a podido agregar el producto", {
                position: "top-center",
                autoClose: 2000,
                theme: "colored"
            })
        }
    }

    return (
      <div className="flex justify-center mt-16">
          <div className="m-5 w-4/12 border-4 border-sky-700">
              <img src={item.image} alt={item.title}/>
          </div>
          <div className="text-center">
              <div>
                  <h1 className="pt-5 text-6xl font-bold tracking-wide underline">{item.title}</h1>
                  <p className="pt-11 text-2xl font-semibold">Descripción: {item.description}</p>
                  <h2 className=" mt-64 font-medium text-4xl text-lime-700">Precio: {item.price}</h2>
              </div>
              <ItemCount handleConfirm={handleConfirm}/>
          </div> 
       </div>
    )
}
  
export default Item;