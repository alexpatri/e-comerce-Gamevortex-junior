import { useState } from "react";
import { ItemCount } from "../itemCount";
import { IProduct } from "@/interfaces/respo.interface";

const Item = ({ id, title, price, pictureUrl, stock }:IProduct) => {

    const [Istock, setStock] = useState<number>(stock);

    const changeStock = (value:number) => {
        setStock(previous => previous - value);
    }

    return (
        <div className="h-[28rem] shadow border border-gray-300 bg-gray-50 rounded-md flex flex-col">
            <img src={pictureUrl} alt={title} className="shadow-md w-72"/>
            <div className="flex flex-col justify-between items-start p-2">
                <div>
                    <p><b>{title}</b></p>
                    <p>R$ {price}</p>
                    {Istock > 0 ? <p className="text-xs">Estoque: {Istock}</p> : <p className="text-xs text-red-500">Fora de Estoque</p>}
                </div>
            </div>
            <ItemCount stock={Istock} initial={1} onAdd={changeStock}/>
        </div>
    );
}

export { Item };