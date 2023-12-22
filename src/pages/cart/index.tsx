import { NavBar } from "@/components/navBar";
import { useCart } from "@/contexts/cart.zustand";
import { IProduct } from "@/interfaces/product.interface";
import { addDoc, collection, doc, getFirestore, runTransaction, updateDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

const Cart = () => {

  const {items, setItems} = useCart();
  const [countTotalPrice, setCountTotalPrice] = useState<number>(0);
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
    setCountTotalPrice(totalCount);
    setCountQuantity(totalQuantity);
  }, [items]);

  const onRemove = (item:IProduct) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems(updatedItems);
  }

  const onBuy = () => {
    const nameElement: HTMLInputElement | null = document.getElementById("name") as HTMLInputElement;
    const phoneElement: HTMLInputElement | null = document.getElementById("phone") as HTMLInputElement;
    const emailElement: HTMLInputElement | null = document.getElementById("email") as HTMLInputElement;
  
    const name = nameElement.value;
    const phone = phoneElement.value;
    const email = emailElement.value;

  if (name == "" || phone == "" || email == "") {
      alert("Preencha os campos obrigatórios.");
      return;
  }

    const order = {
      buyer: { name, phone, email },
      items: items.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      date: new Date(),
      total: countTotalPrice,
    };
  
    const db = getFirestore();
    const orderCollection = collection(db, "order");
    addDoc(orderCollection, order);

    items.map(async (item) => {
      const itemDoc = doc(db, "items", item.id);
      try {
        await runTransaction(db, async (transaction) => {
          const itemData = await transaction.get(itemDoc);

          if (!itemData.exists()) {
            throw new Error(`O item com ID ${item.id} não foi encontrado no Firestore`);
          }

          const currentStock = itemData.data().stock;
    
          if (item.quantity === undefined || currentStock < item.quantity) {
            throw new Error(`Estoque insuficiente para o item com ID ${item.id}`);
          }
  
          const newStock = currentStock - item.quantity;
    
          transaction.update(itemDoc, { stock: newStock });
        });
      } catch (error:any) {
        alert("Algo deu arrado");
        console.error(`Erro ao atualizar estoque para o item com ID ${item.id}:`, error.message);
        return;
      }
    })

    alert("Compra realizada com sucesso.");
    setItems([]);
  };

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
      {
        isClient && items.length > 0 &&
        <div className="flex w-full justify-around items-center shadow-md p-4 mt-3">
          <div className="flex flex-col">
            <label htmlFor="name">Nome:</label>
            <input className="border border-gray-400 rounded-sm" type="text" id="name" name="name"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Telefone:</label>
            <input className="border border-gray-400 rounded-sm" type="text" id="phone" name="phone"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">E-mail:</label>
            <input className="border border-gray-400 rounded-sm" type="email" id="email" name="email"/>
          </div>
            
        </div>
      }
      <div className="h-14 flex w-full justify-end items-center shadow-md p-4 mt-3">
        <div className="w-1/2 flex justify-between items-center">
          <p>{countQuantity} Itens</p>
          <p>Total: R$ {countTotalPrice}</p>
          <button onClick={onBuy} className={`bg-slate-800 text-white p-2 rounded-md w-36 ${countQuantity !== 0 && "hover:-translate-y-1 transition-transform duration-200"} disabled:bg-slate-600`} disabled={countQuantity === 0}>Comprar</button>
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
