export interface MeLiResponse<T> {
    results: T;
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