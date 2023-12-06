import { ICategory } from "@/interfaces/category.interface";

const getCategory = (id?:number): Promise<ICategory[]> => {
    return new Promise((resolve, reject) => {
        const category = [
            {
                id: 1,
                name: "PlayStation"
            },
            {
                id: 2,
                name: "Xbox"
            },
            {
                id: 3,
                name: "PC"
            },
        ];
        if(id === undefined) {
            resolve(category);
        } else {
            const foundCategory = category.find((cat) => cat.id === id);
            if (foundCategory) {
                resolve([foundCategory]);
            } else {
                reject(new Error("Item não encontrado"));
            }
        }
    });
}

export { getCategory };