import {IProduct} from "./IProduct";

export default interface IProducts {
    products: IProduct[]
    total: number
    skip: number
    limit: number
}