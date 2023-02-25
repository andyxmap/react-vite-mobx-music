import {createContext, useContext, useState} from "react"

function ListProvider(){
    const [list,setList] = useState<Array<any>>([])

    function add(item:any){
        list.push(item)
        setList([...list])
    }

    function clear(){
        setList([])
    }

    return {list,add, clear}
}

const ListContext = createContext<ReturnType<typeof ListProvider>>({} as any )

const useListContext = () => useContext(ListContext)

export {ListContext,useListContext,ListProvider}