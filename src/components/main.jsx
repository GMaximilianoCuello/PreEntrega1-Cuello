import { Route, Routes } from "react-router-dom"
import HomePage from "../page/home"
import ProductosPage from "../page/productos"
import ContactoPage from "../page/contacto"
import ItemDetailContainer from "./itemDetailContainer"



function Main() {
    return (
        <main className="p-4 grow bg-gray-200">
            
            <Routes>

                <Route path="/" element={ <HomePage title="Bienvenido a Tecnology SA"/> } />

                <Route path="/productos"  element={ <ProductosPage tittle="Nuestros Productos"/> } />
                <Route path="/item/:id" element={<ItemDetailContainer />} />

                <Route path="/contact"  element={ <ContactoPage title="Contactanos!"/> } />

            </Routes>
            
        </main>
    )
}

export default Main