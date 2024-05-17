import { useContext } from "react"
import { contexto } from "../Contexto";

const useCart = () => {
    const valorActual = useContext(contexto)
    return valorActual
}

export default useCart;