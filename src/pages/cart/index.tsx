import { NavBar } from "@/components/navBar";
import { useCart } from "@/contexts/cart.context";
import { IProduct } from "@/interfaces/product.interface";

const Item = () => {

  const {items, setItems} = useCart();

  const onRemove = (item:IProduct) => {
    setItems(items.filter(i => i.id !== item.id));

  }

  return (
    <>
      <NavBar />
      <div className="m-20">
      {
        items.map((i) => {

          return (
            <div className="shadow-md p-4 flex gap-4">
              <img className="h-28" src={i.pictureUrl} alt={`Imagem do jogo ${i.title}`} />
              <div className="flex justify-between items-end w-full">
                <div>
                  <p>{i.title}</p>
                  <p><b>Valor Unitário:</b> R${i.price}</p>
                  <p><b>Quantidade:</b> {i.quantity}</p>
                  <p><b>Total:</b> R${i.price * (i.quantity? i.quantity : 1)}</p>
                  
                </div>
                  <button className="bg-red-500 text-white p-2 shadow-md rounded-md h-10 flex items-center hover:-translate-y-1 transition-transform duration-200" 
                          onClick={() => onRemove(i)}>      
                    <img src="/remove.svg" alt="" /> 
                    Remover
                  </button>
              </div>
            </div>
          )
        })
      }
      </div>
      <div>
      </div>
    </>
  );
};

export default Item;
