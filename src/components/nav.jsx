import CartWidget from "./cartWidget"

function Nav() {
    return ( 
        <>
        <h1 className=" text-3xl font-bold font-serif pl-4 ">Tecnology SA</h1>
        <nav className="text-xl font-semibold hidden xl:gap-28 md:flex md:gap-4">

            <a href="#" className="flex gap-4">
                INICIO 
                <img src="/home.png" className="w-7 h-7" alt="home" />
            </a>

            <p>/</p>
            <a href="#" className="flex gap-4">
                PRODUCTOS
                <img src="/pc.png" className="w-7 h-7" alt="home" />
            </a>

            <p>/</p>

            <a href="#" className="flex gap-4">
                FAVORITOS   
                <img src="/favourite.png" className="w-8 h-7" alt="home" />
            </a>
            
        </nav>
        <CartWidget/>
        </>
    )
}

export default Nav