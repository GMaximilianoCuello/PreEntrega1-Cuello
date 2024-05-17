import { useState, useEffect } from "react"

function ItemCount(props) {

    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {

    }, [cantidad])

    const aumentar = () => {
        setCantidad(cantidad + 1)
    }

    const disminuir = () => {
        if (cantidad > 0)
        setCantidad(cantidad - 1)
        
    }

    const Confirmar = () => {
        props.handleConfirm(cantidad)
    }


    return (

        <div className=" mt-3">
            <div className="flex justify-center gap-5 p-8">
                <button onClick={aumentar} className="p-3 text-black bg-slate-400 rounded-full">+</button>
                <p className=" text-4xl">{cantidad}</p>
                <button onClick={disminuir} className="p-3 text-black bg-slate-400 rounded-full">-</button>
            </div>
            <button onClick={Confirmar} className="text-black font-semibold bg-lime-600 p-2 rounded-full">Confirmar Cantidad</button>
        </div>
    )
}

export default ItemCount