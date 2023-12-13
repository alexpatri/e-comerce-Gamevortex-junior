import { useState } from "react";
import { useRouter } from 'next/router';
import { IProduct } from "@/interfaces/product.interface";
import { useCart } from "@/contexts/cart.context";
import PreviousMap from "postcss/lib/previous-map";

interface Props {
    stock:number;
    initial:number;
    onAdd: (value:number) => void;
    item:IProduct
}

const ItemCount = ({stock, initial=1, onAdd, item}:Props) => {
    const router = useRouter();

    const [count, setCount] = useState<number>(initial);

    const {items, setItems} = useCart();

    const changeCount = (value:number) => {
        if(value > 0 && count < stock || value < 0 && count > initial) {
            setCount(previous => previous + value);
        }
    }

    const handleClick = () => {
        onAdd(count);
        setCount(initial);
        item = {...item, quantity:count};
        setItems([...items, item]);
        router.push('/cart');

    }

    return(
        <div className="flex flex-col justify-center items-end gap-1">
            <div className="flex border border-gray-300 rounded-sm">
                <button className="p-2 flex items-center justify-center" onClick={() => {changeCount(-1)}}>-</button>
                <div className="border-x border-gray-300 py-2 px-4 flex items-center justify-center bg-indigo-50">
                    {count}
                </div>
                <button className="p-2 flex items-center justify-center" onClick={() => {changeCount(1)}}>+</button>
            </div>
        
            <button className="border border-gray-300 text-gray-50 bg-slate-800 py-1 px-2 rounded-md shadow-md hover:bg-slate-600 disabled:bg-slate-600" disabled={stock === 0} onClick={handleClick}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
}

export { ItemCount };