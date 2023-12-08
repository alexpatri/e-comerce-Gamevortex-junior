import { IProduct } from "@/interfaces/product.interface";
import { ItemCount } from "../itemCount";
import { useState } from "react";

const ItemDatail = ({categoryId, id, title, price, pictureUrl, stock}:IProduct) => {

    const itemsJSON = localStorage.getItem('items');
    const items:IProduct[] = (itemsJSON ? JSON.parse(itemsJSON) : null);

    const [Istock, setStock] = useState<number>(stock);

    const changeStock = (value:number) => {

        if(items) {
            const foundItem = items.find((i) => i.id === id);

            if(foundItem){
                const newStock = foundItem.stock -= value;
                setStock(previous => previous - value);

                const index = items.findIndex((i) => i.id === foundItem.id);
                items[index].stock = newStock;

                localStorage.setItem('items', JSON.stringify(items));
            }
              return;
          }
    }

    return (
        <section className="pt-20 px-52 flex flex-col items-center gap-3 w-screen h-screen">
            <img className="w-96" src={pictureUrl} alt="" />
            <div className="flex justify-between w-96">
                <div className="flex flex-col items-start ">  
                    <p>{title}</p>
                    <p>R$ {price}</p>
                    {Istock ? <p>Quantidade em Estoque: {Istock}</p> : <p className="text-red-600">Fora de Estoque</p>}
                </div>
                <div >
                    <ItemCount stock={Istock} initial={1} onAdd={changeStock}/>
                </div>
            </div>
            
        </section>
        
    )
}

export { ItemDatail }