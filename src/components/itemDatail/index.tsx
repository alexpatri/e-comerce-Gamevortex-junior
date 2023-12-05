import { IProduct } from "@/interfaces/product.interface";
import { ItemCount } from "../itemCount";
import { useState } from "react";

const ItemDatail = ({categoryId, title, price, pictureUrl, stock}:IProduct) => {

    const [Istock, setStock] = useState<number>(stock);

    const changeStock = (value:number) => {
        setStock(previous => previous - value);
    }

    return (
        <section className="pt-20 px-52 flex flex-col items-center gap-3 w-screen h-screen">
            <img className="w-96" src={pictureUrl} alt="" />
            <div className="flex justify-between w-96">
                <div className="flex flex-col items-start ">  
                    <p>{title}</p>
                    <p>R$ {price}</p>
                    <p>Quantidade em Estoque: {Istock}</p>
                </div>
                <div >
                    <ItemCount stock={Istock} initial={1} onAdd={changeStock}/>
                </div>
            </div>
            
        </section>
        
    )
}

export { ItemDatail }