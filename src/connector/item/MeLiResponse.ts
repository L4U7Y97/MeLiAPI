export interface ItemsResult {
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
    attributes: ItemAttribute[]
}

interface ItemAttribute{
    id: string,
    value_name: string,
  }

export interface GetItemDesriptionResponse {
    text: string;
    plain_text: string;
}

export interface GetItemResponse extends ItemsResult {
    sold_quantity: number;
}

export interface GetItemsResponse {
    results: ItemsResult[];
    available_filters: Filter[]
}

interface Filter {
    id: string;
    name: string;
    type: string;
    values: FilterValue[];
}

export interface FilterValue {
    id: string;
    name: string;
    results: number;
}