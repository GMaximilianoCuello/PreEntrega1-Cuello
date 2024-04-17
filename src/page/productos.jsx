import React from 'react'
import ItemListContainer from '../components/ItemListContainer';

function ProductosPage(prop) {

  return (
    <section>
        <h1 className="text-center font-serif font-semibold text-7xl text-indigo-400">{prop.tittle}</h1>

        <div>
        <ItemListContainer/>
        </div>
    </section>
    
  )
}

export default ProductosPage;