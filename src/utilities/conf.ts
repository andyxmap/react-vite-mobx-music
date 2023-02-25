function mode(){
    return import.meta.env.MODE
}

export const conf = {
    apiKey: mode() ==="dev" ? import.meta.env.VITE_API_KEY : import.meta.env.VITE_API_KEY,
    
}