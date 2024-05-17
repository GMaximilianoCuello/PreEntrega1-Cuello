import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"

function Nav() {
    return ( 
        <>
        <h1 className="flex text-3xl font-bold font-serif pl-4 ">Techn<Link to="/"><img src="/logo.png" alt="logo" className=" h-9 transition-transform hover:rotate-180 hover:scale-110"/></Link>logy SA</h1>
        <nav className="text-xl font-semibold hidden xl:gap-28 md:flex md:gap-4">

            <Link to="/" className="flex gap-4 hover:underline">
                INICIO 
                <img src="/home.png" className="w-7 h-7" alt="home" />
            </Link>

            <p>/</p>

            <Link to="/productos" className="flex gap-4 hover:underline">
                PRODUCTOS
                <img src="/pc.png" className="w-7 h-7" alt="home" />
            </Link>

            <p>/</p>

            <Link to="/contact" className="flex gap-4 hover:underline">
                CONTACTO  
                <img src="/contact.png" className="w-8 h-7" alt="home" />
            </Link>
            
        </nav>
        <CartWidget/>
        </>
    )
}

export default Nav;