import { IProduct } from "@/interfaces/product.interface";

const getItems = (id?: number, categoryId?: number ): Promise<IProduct[]> => {
    return new Promise((resolve, reject) => {
      const products: IProduct[] = [
        {
          id:0,
          categoryId:1,
          title:"The Last of Us Parte I",
          price:179.9,
          pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png",
          stock:5
        },
        {
            id:1,
            categoryId:1,
            title:"God of War Ragnarok",
            price:189.9,
            pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/KkIiB8w4CBvZspu6zyzOza3p.png",
            stock:5
        },
        {
            id:2,
            categoryId:2,
            title:"Forza Horizon 5",
            price:219.9,
            pictureUrl:"https://down-th.img.susercontent.com/file/sg-11134201-22100-qz08h6za6bjvb3",
            stock:5
        },
        {
            id:3,
            categoryId:3,
            title:"Elden Ring",
            price:199.9,
            pictureUrl:"https://i.redd.it/bueqtztxmnj81.png",
            stock:5
        },
        {
            id:4,
            categoryId:3,
            title:"Alan Wake II",
            price:359.9,
            pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/4b674fbec219cb9a3d5b7bc1b3e3ca112fd59c8d492258ac.png",
            stock:5
        },
        {
            id:5,
            categoryId:3,
            title:"Hogwarts Legacy",
            price:179.9,
            pictureUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/JmxLZt6exeqcKRz7BSmK8aId.png",
            stock:5
        }
      ];
  
        setTimeout(() => {
            if (id !== undefined) {
            const foundItem = products.find((product) => product.id === id);
            if (foundItem) {
                resolve([foundItem]);
            } else {
                reject(new Error("Item não encontrado"));
            }
            } else if (categoryId !== undefined) {
            const foundItems = products.filter((product) => product.categoryId === categoryId);
            if (foundItems.length > 0) {
                resolve(foundItems);
            } else {
                reject(new Error("Nenhum item encontrado para a categoria especificada"));
            }
            } else {
                resolve(products);
            }
        }, 2000);
    });
};

export { getItems };