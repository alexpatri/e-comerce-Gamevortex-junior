import { IProduct } from "@/interfaces/product.interface";
import { Item } from "../item";
import React from "react";

interface ItemListProps {
    items: IProduct[];
}

const ItemList = ({ items }:ItemListProps) => {
    return (
        <div className="flex justify-center gap-2">
            {
                items.map((i) => {
                    return (
                        <Item key={i.id} categoryId={i.categoryId} id={i.id} title={i.title} price={i.price} pictureUrl={i.pictureUrl} stock={i.stock}/>
                    )
                })
            }
            
        </div>
    );
}

export { ItemList };