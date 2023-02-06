export function fetchJson<T>(input: RequestInfo | URL, init?: RequestInit) {
    return fetch(input, init).then(response => response.json()).then(json => json as T)
}