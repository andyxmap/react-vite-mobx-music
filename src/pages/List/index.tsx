import { useListContext } from "@/context/list";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Chip,
    Button,
  } from "@material-tailwind/react";
import { createRef, forwardRef,ForwardRefRenderFunction, useImperativeHandle, useRef, useState } from "react";
type andle = {
  close: () => void 
}

const List:ForwardRefRenderFunction<andle,any> = ((props,ref) => {

  const {list,add,clear} = useListContext()
  const [visible,setVisible] = useState(true)
  
  useImperativeHandle(ref, () => ({
    close: () => {
      console.log("In close")
      setVisible(false)
    }
  }));
        return (
            <div ref={ref as any}>
                  <Card className="w-96" shadow>
              <CardHeader color="blue" className="relative h-56">
                <img
                  alt="img-blur-shadow"
                  className="h-full w-full"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  Test Provider
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2 min by
                  walk and near to "Naviglio" where you can enjoy the main night life in
                  Barcelona.
                </Typography>
              </CardBody>
              <CardFooter divider className="flex items-center justify-between py-3 flex-wrap">
                  {
                    list.map((value,index)=><Chip value={value} key={index} />)
                  }
              </CardFooter>
              <CardFooter divider className="flex items-center justify-between py-3">
                  <Button variant="gradient" onClick={()=>{add("Item")}}>Add</Button>
                  <Button variant="outlined" onClick={()=>{clear()}}>Clear</Button>
              </CardFooter>
            </Card>
            </div>
            
          );

})

export const ListRef = forwardRef(List)

export default function(){
   const ref = createRef<andle>()

   return (
    <div>
       <ListRef ref={ref}></ListRef>
       <Button variant="outlined" onClick={()=>{ref.current?.close()}}>Close</Button>
    </div>
   )
}
        
