import { ItemList } from "../itemList";
import { useEffect, useState } from "react";
import { IProduct} from "@/interfaces/product.interface";
import { Loading } from "../loading";
import { getItems } from "@/utils/getItems";

interface Props {
    categoryId?:number;
}

const ItemListContainer = ({categoryId}:Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [listItems, setListItems] = useState<IProduct[]>([]);
    const [listItemsCat, setListItemsCat] = useState<IProduct[]>([]);

    useEffect(() => {
        const onMount = async () => {
            
            const itemsJSON = localStorage.getItem('items');
            const items:IProduct[] = (itemsJSON ? JSON.parse(itemsJSON) : null);
            
            if(items) {
                if(categoryId) {
                    setListItemsCat(items.filter((product) => product.categoryId === categoryId));
                    setIsLoading(false);
                    return;
                }

                setListItems(items);
                setIsLoading(false);
                return;
            }
            

            try {
                const items = (categoryId !== undefined ? await getItems(undefined, categoryId) : await getItems());
                setListItems(items);
            }
            catch(e) {
                console.log(e);
            }
            finally {
                setIsLoading(false);
            }
        }

        onMount();
    }, []);

    useEffect(() => {
        if(!listItems || listItems.length === 0) return;
        localStorage.setItem('items', JSON.stringify(listItems));
    }, [listItems]);

    return (
        <>
            <Loading loading={isLoading} />
            <section className="bg-indigo-100 h-auto shadow-md p-2">
                <ItemList items={listItemsCat.length !== 0? listItemsCat : listItems}/>
            </section>
        </>
        
    );
}

export { ItemListContainer };