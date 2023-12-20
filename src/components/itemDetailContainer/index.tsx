import { IProduct } from "@/interfaces/product.interface";
import { useEffect, useState } from "react";
import { ItemDatail } from "../itemDatail";
import { Loading } from "../loading";

import { doc, getDoc, getFirestore} from "firebase/firestore";

interface Props {
    id:string;
}

const ItemDetailContainer = ({id}:Props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState<IProduct[]>([]);
    useEffect(() => {
      const onMount = async () => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then((snapshot) => {
          if(snapshot.exists()) {
            setItem([{id: snapshot.id, ...snapshot.data()} as any])
          }
        })
        setIsLoading(false)
      }
    onMount();
  },[])
    
    return (
      <>
        <Loading loading={isLoading}/>
        {item && item.length > 0 && (
        <ItemDatail categoryId={item[0].categoryId} id={item[0].id} title={item[0].title} price={item[0].price} stock={item[0].stock} pictureUrl={item[0].pictureUrl}/> 
        )}
      </>
    );
}

export { ItemDetailContainer };