import { IProduct } from "@/interfaces/respo.interface";
import { Item } from "../item";
import React from "react";

interface ItemListProps {
    items: IProduct[];
  }

const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
        <div className="flex justify-around gap-2">
            {
                items.map((i) => {
                    return (
                        <Item key={i.id} id={i.id} title={i.title} price={i.price} pictureUrl={i.pictureUrl} stock={i.stock}/>
                    )
                })
            }
            
        </div>
    );
}

export { ItemList };