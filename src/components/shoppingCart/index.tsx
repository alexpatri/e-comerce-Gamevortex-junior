interface Props {
    href: string;
}

const ShoppingCart = ({href}:Props) => {
    return(
        <a href={href} className="bg-gray-50 p-2 rounded-full flex justify-center items-center hover:bg-gray-400 text-slate-800 gap-1">
            <img src="/shopping-cart.svg" alt="shopping cart" className="w-5"/>
        </a>
        
    );
}

export { ShoppingCart };