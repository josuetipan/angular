import { Category } from "./Category";

export class Products{
    id!:number;
    name!:string;
    price!:number;
    description!:string;
    category!: Category;
}