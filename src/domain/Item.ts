import { Price } from "./Price";

interface BaseItem {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
}

export interface Item extends BaseItem{
    category_id: string;
}

export interface ItemWithDetails extends BaseItem {
    category: string;
    sold_quantity: number;
    description: string;
}