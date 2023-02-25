import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import React,{ useState } from "react";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export function CollapseItem({children}:any){

  const [open,setOpen] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
  };
  
   
   return (
    <MenuList>
        <MenuItem disableRipple onClick={handleClick}>
        {open ? <ExpandLess /> : <ExpandMore />}
        </MenuItem>   
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
             {React.Children.map(children,(element)=>{
                 if (!React.isValidElement(element)) return
                 return element
               })
             }
          </List>
        </Collapse> 
    </MenuList>
   )
    
}
