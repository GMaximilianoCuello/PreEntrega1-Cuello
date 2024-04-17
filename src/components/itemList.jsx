import { Link } from "react-router-dom";

function ItemList ({producto}) {

  return (
    <div className=" max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 transition hover:scale-110 group">
        <div className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
            <img src={producto.image} alt={producto.title}/>
        </div>
        <div className="flex flex-col justify-between p-6 space-y-8 bg-gray-300">
            <div className="space-y-2">
                <h2 className="pt-3 text-3xl font-semibold tracking-wide">{producto.title}</h2>
                <p className=" text-green-700 mb-2">{producto.price}</p>
                <p className="text-sm">{producto.description}</p>
            </div>
            <Link to={`/item/${producto.id}`}><button className="w-full border border-sky-900 bg-white">Ver Más!</button></Link>
        </div> 
     </div>
  )
}

export default ItemList;