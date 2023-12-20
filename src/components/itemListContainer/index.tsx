import { ItemList } from "../itemList";
import { useEffect, useState } from "react";
import { IProduct} from "@/interfaces/product.interface";
import { Loading } from "../loading";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";

interface Props {
    categoryId?:number;
}

const ItemListContainer = ({categoryId}:Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [listItems, setListItems] = useState<IProduct[]>([]);

    useEffect(() => {
        const onMount =async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");

            if(categoryId) {
                const q = query(itemsCollection, where("categoryId", "==", categoryId));
                getDocs(q).then((snapshot) => {
                    setListItems(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()} as any)))
                })
            }
            else {
                getDocs(itemsCollection).then((snapshot) => {
                    setListItems(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()} as any)))
            })
            }
            setIsLoading(false);
        }

        onMount();
    }, [])

    return (
        <>
            <Loading loading={isLoading} />
            <section className="bg-indigo-100 h-auto shadow-md p-2 mb-20">
                <ItemList items={listItems}/>
            </section>
        </>
        
    );
}

export { ItemListContainer };