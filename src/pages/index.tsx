import Header from "@/components/common/Header";
import { useStoreContext } from "@/context/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Card,{ListCard} from "@/components/view-objects/tecard"
import ViteIcon from "@/components/common/ViteIcon";
import { Typography } from "@material-tailwind/react";
import ReactIcon from "@/components/common/ReactIcon";
import Footer from "@/components/common/Footer";
import Icon from "@/components/common/Icon";

const Home = observer(() => {
  

  return (
    <div className="w-full">
      <Header></Header>
      <div className=" min-h-screen mt-4 grid place-items-center w-full" id="to-visit">
      <ListCard>
          <Card img={<ViteIcon></ViteIcon>} content={<Typography>Vite bundler powered</Typography>}></Card>
          <Card img={<ReactIcon></ReactIcon>} content={<Typography>Impulsed by React Frontend Framework</Typography>}></Card>
          <Card img={<Icon></Icon>} content={<Typography>See code in github</Typography>}></Card>
      </ListCard> 
      </div>
      <div className="mt-4 bg-indigo-200">
      <Footer></Footer>
      </div>
      
      
      
    </div>
  )
})

export default Home

