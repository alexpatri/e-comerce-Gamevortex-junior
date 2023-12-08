import { IProduct } from "@/interfaces/product.interface";
import { use, useEffect, useState } from "react";
import { ItemDatail } from "../itemDatail";
import { Loading } from "../loading";
import { getItems } from "@/utils/getItems";

interface Props {
    id:number;
}

const ItemDetailContainer = ({id}:Props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState<IProduct[]>([]);      
    
    useEffect(() => {

      const itemsJSON = localStorage.getItem('items');
      const items:IProduct[] = (itemsJSON ? JSON.parse(itemsJSON) : null);
      
      if(items) {
        const foundItem = items.find((i) => i.id === id);

        if(foundItem){
          setItem([foundItem]);
        }

          setIsLoading(false);
          return;
      }

      const onMount = async () => {
        try {
            const result = await getItems(id);
            setItem(result);
        }
        catch(e) {
            console.log(e);
        }
        finally {
          setIsLoading(false);
        }
    }
    onMount();
    }, [id])
    
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