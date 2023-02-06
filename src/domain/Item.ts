import { Price } from "./Price";

export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
}

export interface ItemWithDetails extends Item {
    sold_quantity: number;
    description: string;
}