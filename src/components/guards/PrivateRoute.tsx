import {Navigate} from "react-router-dom"
import {useUserSession} from "@/hooks/user"
import { useAppDispatch } from "@/hooks/reduxHooks"
import { setAuth } from "@/redux/state/userStateSlice"

interface IProps {
  children: React.ReactElement
}

export const PrivateRouter = (props:IProps)=> {
   
   const {getUserSession} = useUserSession()
   const dispatch = useAppDispatch();
   const session = getUserSession()
   if(session == null){
    
    return (
        <Navigate to="/"></Navigate>
    )
   }else{
    dispatch(setAuth(session));
    return props.children
   }

}

export default PrivateRouter;