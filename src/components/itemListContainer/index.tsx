import { ItemList } from "../itemList";
import { useEffect, useState } from "react";
import { IProduct} from "@/interfaces/respo.interface";
import { Loading } from "../loading";

const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [listGames, setListGames] = useState<IProduct[]>([])
    
    const getListGames = ():Promise<IProduct[]> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        {
                            id:0,
                            title:"The Last of Us Parte I",
                            price:179.9,
                            pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png",
                            stock:5
                        },
                        {
                            id:1,
                            title:"God of War Ragnarok",
                            price:189.9,
                            pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/KkIiB8w4CBvZspu6zyzOza3p.png",
                            stock:5
                        },
                        {
                            id:2,
                            title:"Forza Horizon 5",
                            price:219.9,
                            pictureUrl:"https://down-th.img.susercontent.com/file/sg-11134201-22100-qz08h6za6bjvb3",
                            stock:5
                        },
                        {
                            id:3,
                            title:"Elden Ring",
                            price:199.9,
                            pictureUrl:"https://i.redd.it/bueqtztxmnj81.png",
                            stock:5
                        },
                        {
                            id:4,
                            title:"Alan Wake II",
                            price:359.9,
                            pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/4b674fbec219cb9a3d5b7bc1b3e3ca112fd59c8d492258ac.png",
                            stock:5
                        },
                        {
                            id:5,
                            title:"Hogwarts Legacy",
                            price:179.9,
                            pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/JmxLZt6exeqcKRz7BSmK8aId.png",
                            stock:5
                        }
                    ]
                )
            }, 2000)
        })
    }

    useEffect(() => {
        const onMount = async () => {
            try {
                const items = await getListGames();
                setListGames(items);
            }
            catch(e) {
                console.log(e);
            }
            finally {
                setIsLoading(false);
            }
        }
        onMount();
    }, [])

    return (
        <>
            <Loading loading={isLoading} />
            <section className="bg-indigo-100 h-auto shadow-md p-2">
                <ItemList items={listGames}/>
            </section>
        </>
        
    );
}

export { ItemListContainer };