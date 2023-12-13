import { IProduct } from "@/interfaces/product.interface";
import { createContext, useContext, useState } from "react";


interface ICart {
    items:IProduct[],
    setItems: (status: IProduct[]) => void,
}

const cartContextDefault = {
    items:[],
    setItems: () => null,
};

const CartContext = createContext<ICart>(cartContextDefault);

interface IProvider {
    children:React.ReactNode,
};

const CartProvider = ({children}:IProvider) => {
    const [items, setItens] = useState<IProduct[]>([])

    return (
        <CartContext.Provider value={{items:items, setItems:setItens}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export {useCart, CartProvider};
