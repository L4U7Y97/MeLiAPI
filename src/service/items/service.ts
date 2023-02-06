import { ItemsResponse } from "../../api/items";
import { getItemsConnector } from "../../connector/item/connector";

export async function getItemsService(query: string): Promise<ItemsResponse> {
    const [items, categories] = await getItemsConnector(query)
    return {
        author: {
            lastname: 'Pujol',
            name: 'Lautaro',
        },
        categories: categories.sort((categoryA, categoryB) => categoryA.results > categoryB.results ? 1: -1).map(({name}) => name),
        items: items.slice(0, 4),
    }
}