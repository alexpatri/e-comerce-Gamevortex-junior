const NavBar = () => {
    return (
        <div className="flex justify-between items-center px-36 py-4 bg-slate-800 text-gray-100 shadow-xl">
            <h2>GameVortex</h2>
            <nav className="flex justify-between w-1/4">
                <li className="list-none hover:underline"><a href="#">Catálogo</a></li>
                <li className="list-none hover:underline"><a href="#">Favoritos</a></li>
                <li className="list-none hover:underline"><a href="#">Login</a></li>
            </nav>
        </div>
    );
}

export {NavBar};