function mode(){
    return import.meta.env.MODE
}

export const conf = {
    apiKey: mode() ==="dev" ? import.meta.env.VITE_API_KEY : import.meta.env.VITE_API_KEY,
    baseUrl: mode() ==="dev" ? import.meta.env.VITE_BASE_URL : import.meta.env.VITE_BASE_URL,
    mapKey: mode() ==="dev" ? import.meta.env.VITE_MAP_KEY : import.meta.env.VITE_MAP_KEY,
    
}