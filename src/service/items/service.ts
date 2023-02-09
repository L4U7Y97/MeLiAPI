import { ItemsResponse, ItemWithDetailsResponse } from "../../api/items";
import { getItemsConnector, getItemWithDetailsConnector } from "../../connector/item/connector";
import { Item } from "../../domain/Item";
import { FilterValue } from "../../connector/item/MeLiResponse";

export async function getItemsService(query: string): Promise<ItemsResponse> {
    const [items, categories] = await getItemsConnector(query)
    const slicedItems = items.slice(0, 4)
    return {
        author: {
            lastname: 'Pujol',
            name: 'Lautaro',
        },
        categories: categories.filter(makeCategoryFilterBy(slicedItems)).sort((categoryA, categoryB) => categoryA.results > categoryB.results ? 1: -1).map(({name}) => name),
        items: slicedItems,
    }
}

function makeCategoryFilterBy(items: Item[]) {
    return (category: FilterValue) => items.map((item) => item.category_id).some((categoryId) => category.id === categoryId);
}

export async function getItemWithDetailsService(query: string): Promise<ItemWithDetailsResponse> {
    const item = await getItemWithDetailsConnector(query)
    return {
        author: {
            lastname: 'Pujol',
            name: 'Lautaro',
        },
        item,
    }
}