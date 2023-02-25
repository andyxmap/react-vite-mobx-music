import { JokeStore } from "@/mobx/joke"
import {createContext, useContext} from "react"

const store = new JokeStore()
const StoreContext = createContext<typeof store>(store)
const useStoreContext = () => useContext(StoreContext)

export {useStoreContext, StoreContext}