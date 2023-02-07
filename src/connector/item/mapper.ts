import { Item, ItemWithDetails } from "../../domain/Item";
import { countDecimals } from "../../utils/numberUtils";
import { GetItemDesriptionResponse, GetItemResponse, ItemsResult } from "./MeLiResponse";

export function toItem(response: ItemsResult): Item {
    return {
        condition: response.attributes.find(({id}) => id === 'ITEM_CONDITION')?.value_name || response.condition,
        free_shipping: response.shipping.free_shipping,
        id: response.id,
        picture: response.thumbnail,
        price: { amount: response.price, currency: response.currency_id, decimals: countDecimals(response.price) },
        title: response.title
    }
}

export function toItemWithDetails(itemResponse: GetItemResponse, descriptionResponse: GetItemDesriptionResponse): ItemWithDetails {
    return {
        ...toItem(itemResponse),
        description: descriptionResponse.plain_text || descriptionResponse.text,
        sold_quantity: itemResponse.sold_quantity

    }
}