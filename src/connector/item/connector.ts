import { Item } from "../../domain/Item";
import { fetchJson } from "../../utils/fetchUtils"
import { FilterValue, MeLiResponse } from "../MeLiResponse"
import { toItem } from "./mapper";

export interface GetItemsResponse {
    condition: string;
    id: string,
    title: string,
    category_id: string,
    thumbnail: string,
    currency_id: string,
    price: number,
    shipping: {
        free_shipping: boolean,
    },
    attributes: {
        id: string,
        value_name: string,
      }[]
}



export async function getItemsConnector(query: string): Promise<[Item[], FilterValue[]]> {
  const { results, available_filters } = await fetchJson<MeLiResponse<GetItemsResponse[]>>(`https://api.mercadolibre.com/sites/MLA/search?${new URLSearchParams({
        q: query,
    })}`);
    return [results.map(toItem), available_filters.find(({id}) => id === 'category')?.values || []];
}
