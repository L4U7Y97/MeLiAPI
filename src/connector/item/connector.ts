import { Item, ItemWithDetails } from "../../domain/Item";
import { fetchJson } from "../../utils/fetchUtils"
import { FilterValue, GetItemDesriptionResponse, ItemsResult, GetItemsResponse, GetItemResponse } from "./MeLiResponse"
import { toItem, toItemWithDetails } from "./mapper";

export async function getItemsConnector(query: string): Promise<[Item[], FilterValue[]]> {
  const { results, available_filters } = await fetchJson<GetItemsResponse>(`https://api.mercadolibre.com/sites/MLA/search?${new URLSearchParams({
        q: query,
    })}`);
    return [results.map(toItem), available_filters.find(({id}) => id === 'category')?.values || []];
}

async function getItem(itemId: string): Promise<GetItemResponse> {
    return await fetchJson<GetItemResponse>(`https://api.mercadolibre.com/items/${itemId}`);
  }

async function getItemDescription(itemId: string): Promise<GetItemDesriptionResponse> {
    return fetchJson<GetItemDesriptionResponse>(`https://api.mercadolibre.com/items/${itemId}/description`);
  }

export async function getItemWithDetailsConnector(itemId: string): Promise<ItemWithDetails> {
    const [item, description] = await Promise.all([getItem(itemId), getItemDescription(itemId)])
    return toItemWithDetails(item, description)
}
