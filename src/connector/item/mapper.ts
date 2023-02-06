import { Item } from "../../domain/Item";
import { countDecimals } from "../../utils/numberUtils";
import { GetItemsResponse } from "./connector";

export function toItem(response: GetItemsResponse): Item {
    return {
        condition: response.condition,
        free_shipping: response.shipping.free_shipping,
        id: response.id,
        picture: response.thumbnail,
        price: { amount: response.price, currency: response.currency_id, decimals: countDecimals(response.price) },
        title: response.title
    }
}