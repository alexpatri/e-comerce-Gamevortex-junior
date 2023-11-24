import { useState } from "react";
import { ItemCount } from "../itemCount";

interface Props {
    greeting: string;
}

const ItemListContainer = ({greeting}:Props) => {

    const [stock, setStock] = useState<number>(5);

    const changeStock = (value:number) => {
        setStock(previous => previous - value);
    }

    return (
        <div className="w-1/6 h-1/2 shadow border border-gray-300 bg-gray-50 rounded-md grid grid-rows-4">
            <div className="flex justify-between border-t border-gray-300 row-start-4 p-2">
                <div>
                    <p>{greeting}</p>
                    {stock > 0 ? <p className="text-xs">Estoque: {stock}</p> : <p className="text-xs text-red-500">Fora de Estoque</p>}
                </div>
                <ItemCount stock={stock} initial={1} onAdd={changeStock}/>
            </div>
        </div>
    );
}

export { ItemListContainer };