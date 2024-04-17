import Header from './Header'
import Main from './components/main'
import Footer from './footer'
import './App.css'
import { BrowserRouter} from "react-router-dom"




function App() {

  return (
    <BrowserRouter>
      <Header />

      <Main />

      <Footer />
    </BrowserRouter>
  )
}

export default App
