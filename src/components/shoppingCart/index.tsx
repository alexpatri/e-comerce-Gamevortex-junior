import { useCart } from "@/contexts/cart.zustand";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

interface Props {
    href: string;
}

const ShoppingCart = ({href}:Props) => {

    const {items} = useCart();
    const [count, setCount] = useState<number>(0);
    
    useEffect(() => {
        const totalCount = items.reduce((acc, item) => acc + (item.quantity ? item.quantity : 0), 0);
        setCount(totalCount);
    }, [items]);

    return(
        <Link href={href} className="bg-gray-50 p-2 rounded-full flex justify-center items-center hover:bg-gray-400 text-slate-800 gap-1">
            <img src="/shopping-cart.svg" alt="shopping cart" className="w-5"/> {count}
        </Link>
        
    );
}

export { ShoppingCart };