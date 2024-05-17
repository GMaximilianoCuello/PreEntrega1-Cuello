import { app } from "./firebase";
import { getFirestore, collection, getDocs} from "firebase/firestore"

export const getItems = () => {

    const db = getFirestore(app)

    const itemsCollection = collection (db, "items")

    const query = getDocs(itemsCollection)

    return query
        .then((resultado)=>{
            
           const items = resultado.docs.map(doc => { 
                const item = doc.data()
                item.id = doc.id


                return item 
            })
           return items
        })
        .catch((error)=> {
            console.log(error)
        })
}
