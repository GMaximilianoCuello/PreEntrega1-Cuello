import { useEffect, useState } from "react";
import { pedirItemPorId } from "../pedirDatos";
import Item from "./itemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer( {} ) {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect (() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res);
            })
            
    }, [id])

  return (
    <div>
        {item && <Item item={item}/>}
    </div>
  )

}

export default ItemDetailContainer;