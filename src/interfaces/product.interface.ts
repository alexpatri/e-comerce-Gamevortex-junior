export interface IProduct {
    id:string;
    categoryId:number;
    title:string;
    price:number;
    pictureUrl:string;
    stock:number;
    quantity?:number;
}