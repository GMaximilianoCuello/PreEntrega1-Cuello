import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider


function CartProvider (props) {

    const [cantCarro, setCantCarro] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    
    
    const agregarAlCarro = (cant, item) => {
        setCantCarro(cantCarro + cant)

        const copia = [...carrito]

        const productoConCantidad = item
        productoConCantidad.cantidad = cant

        const estaEnElCarro = copia.find((item) => item.id === productoConCantidad.id)
       
        if (estaEnElCarro) {
            estaEnElCarro.cantidad += cantidad
        } else {
            
            copia.push(productoConCantidad)
        }


        setCarrito(copia)

        const totalProducto = cant * item.price;
        setPrecioTotal(precioTotal + totalProducto);

    }
    
    const cantidadEnCarro = () => {
        return carrito.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const removerProducto = (id) => {
        const copia = [...carrito];
        copia.splice(item.id);
        setCarrito(copia);
        setCantCarro(cantidadEnCarro());
    };

    const vaciarCarro = () => {
        setCarrito([])
    }

    const precioFinal = () => {
        return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    
    const valorActual = {
        carrito: carrito,
        cantCarro: cantCarro,
        precioTotal: precioTotal,
        agregarAlCarro: agregarAlCarro,
        cantidadEnCarro: cantidadEnCarro,
        removerProducto: removerProducto,
        vaciarCarro: vaciarCarro,
        precioFinal: precioFinal
    }

    return (
        <Provider value={valorActual}>
            {props.children}
        </Provider>
    )
}

export default CartProvider