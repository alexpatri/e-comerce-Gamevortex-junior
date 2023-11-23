import { useState } from "react";

interface Props {
    stock:number;
    initial:number;
    onAdd: () => void;
}

const ItemCount = ({stock, initial=1, onAdd}:Props) => {

    const [count, setCount] = useState<number>(initial);

    const changeCount = (value:number) => {
        if(value > 0 && count < stock || value < 0 && count > initial) {
            setCount(previous => previous + value);
        }
    }

    return(
        <div className="flex flex-col justify-center items-end gap-1">
            <div className="flex flex-col items-center">
                <div className="flex border border-gray-300 rounded-sm">
                <button className="p-2 flex items-center justify-center" onClick={() => {changeCount(-1)}}>-</button>
                <div className="border-x border-gray-300 py-2 px-4 flex items-center justify-center bg-indigo-50">{count}</div>
                <button className="p-2 flex items-center justify-center" onClick={() => {changeCount(1)}}>+</button>
            </div>
            {stock <= 0 && <p className="text-xs text-red-500">Fora de estoque</p>}
            </div>
        
        <button className="border border-gray-300 text-white bg-slate-800 py-1 px-2 rounded-md shadow-md hover:bg-slate-600" onClick={onAdd}>Adicioar ao carrinho</button>
        </div>
    );
}

export { ItemCount };