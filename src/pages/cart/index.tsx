import { NavBar } from "@/components/navBar";
import { useCart } from "@/contexts/cart.zustand";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cart = () => {

  const {items, setItems} = useCart();
  const [countPrice, setCountPrice] = useState<number>(0);
  const [countQuantity, setCountQuantity] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  useEffect(() => {
    let totalCount = 0;
    let totalQuantity = 0;
    items.forEach((i) => {
      totalCount += i.price * (i.quantity ? i.quantity : 1);
      totalQuantity += (i.quantity ? i.quantity : 1);
    });
    setCountPrice(totalCount);
    setCountQuantity(totalQuantity);
  }, [items]);

  const onRemove = (item:IProduct) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems(updatedItems);
  }

  return (
    <>
      <NavBar />
      <div className="m-20 gap-2">
      {isClient &&
        items.map((i) => {

          return (
            <div key={i.id} className="shadow-md p-4 flex justify-between items-end w-full">
              <div className="flex gap-3">
                <img className="h-28" src={i.pictureUrl} alt={`Imagem do jogo ${i.title}`}/>
                <div>
                  <Link className="hover:underline" href={{
                    pathname:"/item/",
                    query: {
                        id:i.id
                    }
                }}><p className="text-lg"><b>{i.title}</b></p></Link>
                  <p>R$ {i.price}</p>
                  
                </div>
              </div>
                <div className="w-1/2 flex justify-between items-center">
                  <p>Qtd. {i.quantity}</p>
                  <p>Total: R$ {i.price * (i.quantity? i.quantity : 1)}</p>
                  <button className="bg-red-500 text-white p-2 shadow-md rounded-md h-10 w-36 flex justify-center items-center hover:-translate-y-1 transition-transform duration-200" 
                          onClick={() => onRemove(i)}>      
                    <img src="/remove.svg" alt="" /> 
                    Remover
                  </button>
                </div>
            </div>
          )
        })
      }
      <div className="h-14 flex w-full justify-end items-center shadow-md p-4 mt-3">
        <div className="w-1/2 flex justify-between items-center">
          <p>{countQuantity} Itens</p>
          <p>Total: R$ {countPrice}</p>
          <button className={`bg-slate-800 text-white p-2 rounded-md w-36 ${countQuantity !== 0 && "hover:-translate-y-1 transition-transform duration-200"} disabled:bg-slate-600`} disabled={countQuantity === 0}>Comprar</button>
        </div>
      </div>
      {
        isClient && items.length == 0 &&
        <div className="mt-20 flex flex-col w-full h-80 items-center">
          <p className="text-lg">Sem itens adicionados ao Carrinho</p>
          <Link href="/" className="bg-slate-800 text-white p-2 rounded-md w-36 flex items-center justify-center text-center hover:bg-slate-600">Ir às compras</Link>
        </div>
      }
      </div>
    </>
  );
};

export default Cart;
