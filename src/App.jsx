import { BrowserRouter} from "react-router-dom"
import Header from './Header'
import Main from './components/main'
import Footer from './footer'
import './App.css'
import CartProvider from './Contexto'
import "./Contexto"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  return (
    <BrowserRouter>

      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
      <ToastContainer/>

    </BrowserRouter>
  )
}

export default App
