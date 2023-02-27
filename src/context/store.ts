import { MapStore } from "@/mobx/map"
import {createContext, useContext} from "react"

const store = new MapStore()
const StoreContext = createContext<typeof store>(store)
const useStoreContext = () => useContext(StoreContext)

export {useStoreContext, StoreContext, store}