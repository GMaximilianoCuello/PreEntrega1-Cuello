import { Link } from "react-router-dom"
import useCart from "../hooks/useCart"

function CartWidget() {

    const {cantidadEnCarro} = useCart()

    return (  
        <Link to="/cart" className="bg-slate-300 border border-slate-500 rounded-lg shadow-lg flex text-2xl xl:gap-3 pr-5 ">

            <img src="/cart.png" className="ml-2 w-8 h-8" />
            {cantidadEnCarro()}
            
        </Link>
    )
}

export default CartWidget