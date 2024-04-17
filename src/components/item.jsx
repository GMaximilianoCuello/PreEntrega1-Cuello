function Item ({item}) {

    return (
      <div className="flex justify-center mt-16">
          <div className="m-5 w-4/12 border-4 border-sky-700">
              <img src={item.image} alt={item.title}/>
          </div>
          <div className="text-center">
              <div>
                  <h2 className="pt-5 text-6xl font-bold tracking-wide underline">{item.title}</h2>
                  <p className="pt-11 text-2xl font-semibold">Descripción: {item.description}</p>
                  <p className=" mt-64 font-medium text-4xl text-lime-700">Precio: {item.price}</p>
              </div>
          </div> 
       </div>
    )
}
  
export default Item;