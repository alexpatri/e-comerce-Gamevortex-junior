import { useState } from "react";
import { ItemCount } from "../itemCount";
import { IProduct } from "@/interfaces/respo.interface";
import Link from "next/link";

const Item = ({ id, title, price, pictureUrl, stock }:IProduct) => {

    const [Istock, setStock] = useState<number>(stock);

    const changeStock = (value:number) => {
        setStock(previous => previous - value);
    }

    return (
        <div className="h-[26.5rem] shadow border border-gray-300 bg-gray-50 rounded-md flex flex-col">
            <img src={pictureUrl} alt={title} className="shadow-md w-72"/>
            <div className="flex flex-col justify-between items-start p-2">
                <div>
                    <p><b>{title}</b></p>
                    <p>R$ {price}</p>
                    {Istock > 0 ? <p className="text-xs">Estoque: {Istock}</p> : <p className="text-xs text-red-500">Fora de Estoque</p>}
                </div>
            </div>
            <div className="flex justify-center items-center pt-4">
                <Link className="py-1 w-1/2 rounded-sm text-center bg-slate-800 text-gray-50 shadow-md hover:bg-slate-600" href={{
                    pathname:"/gameInfo/",
                    query: {
                        id:id
                    }
                }}>Ver Mais</Link>
            </div>
        </div>
    );
}

export { Item };