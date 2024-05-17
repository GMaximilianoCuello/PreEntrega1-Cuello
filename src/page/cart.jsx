
import { toast } from 'react-toastify'
import useCart from '../hooks/useCart'


function Carro() {

  const { carrito, precioFinal, vaciarCarro, } = useCart()
  
  const handleVaciar = () => {
    vaciarCarro();
    toast.error("Se vació el carrito!", {
      position: "bottom-center",
      autoClose: 1000,
      theme: "colored"
  })
  }

  const handleComprar = () => {
    vaciarCarro();
    toast.success("Muchas gracias por la compra!", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored"
    })
  }

  return (

    <div className="m-8">
        <h1 className=' font-bold text-5xl ml-10 pb-5 underline hover:drop-shadow-xl'>Tu Carrito</h1>

        {
          carrito.map((item) =>(
            <div key={item} className='flex justify-around items-center m-5 p-6 rounded-2xl bg-orange-300 '>

              <div>
                <img src={item.image} alt={item.title} className=' w-28' />
              </div>

                <div>
                  <small className='font-semibold'> Nombre</small>
                  <p className=' text-2xl font-bold'>{item.title}</p>
                </div>

                <div>
                  <small className='font-semibold'> Precio unitario</small>
                  <p className=' text-2xl font-bold'>${item.price }</p>
                </div>

                <div>
                  <small className='font-semibold'> cantidad</small>
                  <p className=' text-2xl font-bold'>{item.cantidad} </p>
                </div>

                <div>
                  <small className='font-semibold'>Precio total</small>
                  <p className=' text-2xl font-bold'>${item.price * item.cantidad} </p>
                </div>

            </div>
          ))
        }
        
        {
          carrito.length > 0 ?
          <div className='flex justify-around'>

            <div className='flex m-8' >
              <button onClick={handleVaciar} className=' bg-red-500 text-black text-lg rounded-lg p-2 active:scale-105 transition-all'>Vaciar Carro</button>
              
            </div>

            <div className='flex m-8'>
              <h2 className=' bg-slate-600 text-white text-lg rounded-l-lg p-2'>Precio Total: ${precioFinal()}</h2>
              <button onClick={handleComprar} className='bg-slate-400 text-lg rounded-r-lg p-2 active:scale-105 transition-all'>Finalizar Compra</button>
            </div>

          </div> :
          <h2 className=' font-semibold text-3xl flex justify-center'>El carro está vacío 😔</h2>

        }

    </div>
    
  )
}

export default Carro