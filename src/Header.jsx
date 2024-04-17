import { Route, Routes } from "react-router-dom"
import Nav from "./components/nav"

function Header() {
    return (  
        <header className="flex justify-between p-4 bg-slate-400 sticky top-0 box-border z-10">
            <Nav/>
        </header>
    )
}

export default Header