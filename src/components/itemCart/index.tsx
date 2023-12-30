import { IProduct } from "@/interfaces/product.interface"
import Link from "next/link"

interface Props {
    item:IProduct,
    onRemove: (item:IProduct) => void;
}

const ItemCart = ({item, onRemove}:Props) => {
    return (
        <div className="shadow-md p-4 flex justify-between items-end w-full">
            <div className="flex gap-3">
            <img className="h-28" src={item.pictureUrl} alt={`Imagem do jogo ${item.title}`}/>
            <div>
                <Link className="hover:underline" href={{
                pathname:"/item/",
                query: {
                    id:item.id
                }
            }}><p className="text-lg"><b>{item.title}</b></p></Link>
                <p>R$ {item.price}</p>
                
            </div>
            </div>
            <div className="w-1/2 flex justify-between items-center">
                <p>Qtd. {item.quantity}</p>
                <p>Total: R$ {(item.price * (item.quantity? item.quantity : 1)).toFixed(2)}</p>
                <button className="bg-red-500 text-white p-2 shadow-md rounded-md h-10 w-36 flex justify-center items-center hover:-translate-y-1 transition-transform duration-200" 
                        onClick={() => onRemove(item)}>      
                <img src="/remove.svg" alt="" /> 
                Remover
                </button>
            </div>
        </div>
    );
}

export { ItemCart };