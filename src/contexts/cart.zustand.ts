import { IProduct } from '@/interfaces/product.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ICart {
    items:IProduct[],
    setItems: (list: IProduct[]) => void,
}

const useCart = create<ICart>()(

    persist(
        (set) => ({
        items: [],
        setItems: (list) => set({ items: list}),
        }),
        {
        name: 'cart-items',
        },
    ),
)

export { useCart };