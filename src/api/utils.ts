export const bysykkelFetcher = (url: string) => fetch(url, { headers: { "Client-Identifier": "winsvold-bikelist" } }).then((r) => r.json());
