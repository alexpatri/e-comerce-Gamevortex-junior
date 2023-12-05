import Link from "next/dist/client/link";
import { ShoppingCart } from "../shoppingCart";
import { getCategory } from "@/utils/getCategory";
import { useEffect, useState } from "react";
import { ICategory } from "@/interfaces/category.interface";

const NavBar = () => {
    const [cats, setCats] = useState<ICategory[]>([]);

    useEffect(() => {
        const onMount = async () => {
          try {
              const result = await getCategory();
              setCats(result);
          }
          catch(e) {
              console.log(e);
          }
      }
      onMount();
      }, [])

    return (
        <header className="flex justify-between items-center px-20 py-4 bg-slate-800 text-gray-50 shadow-xl fixed w-full top-0">
            <Link className="hover:underline" href="/"><h2>GameVortex</h2></Link>
            <nav className="flex justify-between items-center w-1/4 gap-2">
                
                <li className="list-none hover:underline">
                    <Link href="/">Catálogo</Link>
                </li>
                {cats.map((item) => {
                    return (
                        <li key={item.id} className="list-none hover:underline">
                            <Link href={{
                            pathname:"/category/",
                            query: {
                                id:item.id,
                            }
                            }}>{item.name}</Link>
                        </li>
                    )
                })}
                <ShoppingCart href="/"/>
            </nav>
        </header>
    );
}

export { NavBar };