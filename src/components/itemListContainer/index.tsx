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
    const [listGames, setListGames] = useState<IProduct[]>([])

    useEffect(() => {
        const onMount = async () => {
            try {
                const items = categoryId !== undefined ? await getItems(undefined, categoryId) : await getItems();
                setListGames(items);
            }
            catch(e) {
                console.log(e);
            }
            finally {
                setIsLoading(false);
            }
        }
        onMount();
    }, [])

    return (
        <>
            <Loading loading={isLoading} />
            <section className="bg-indigo-100 h-auto shadow-md p-2">
                <ItemList items={listGames}/>
            </section>
        </>
        
    );
}

export { ItemListContainer };