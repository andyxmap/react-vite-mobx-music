import {Navigate} from "react-router-dom"

interface IProps {
  children: React.ReactElement
  controlFunction : ()=> boolean
}

export const PrivateRouter = (props:IProps)=> {
   
   return props.controlFunction() ? <Navigate to="/"></Navigate> : props.children
   
}

export default PrivateRouter;