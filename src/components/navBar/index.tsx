import { ListElement } from "../listElement";
import { ShoppingCart } from "../shoppingCart";

const NavBar = () => {
    return (
        <header className="flex justify-between items-center px-20 py-4 bg-slate-800 text-gray-50 shadow-xl fixed w-full top-0">
            <h2>GameVortex</h2>
            <nav className="flex justify-between items-center w-1/4 gap-2">
                <ListElement href="#">Catálogo</ListElement>
                <ListElement href="#">Favoritos</ListElement>
                <ListElement href="#">Login</ListElement>
                <ShoppingCart href="#"/>
            </nav>
        </header>
    );
}

export { NavBar };