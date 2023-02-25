import { Box, List, ListItem, Skeleton } from "@mui/material";

export function ListSkeleton(){
    return (
        <Box>
            <List sx={{ height: "90%" }} >
                            
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={30} animation={"pulse"}/>
                </ListItem>
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={20} animation={"pulse"}/>
                </ListItem>
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={20} animation={"pulse"}/>
                </ListItem>
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={30} animation={"pulse"}/>
                </ListItem>
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={30} animation={"pulse"}/>
                </ListItem>
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={20} animation={"pulse"}/>
                </ListItem>
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={20} animation={"pulse"}/>
                </ListItem>
                <ListItem>
                   <Skeleton variant="rectangular" width={210} height={30} animation={"pulse"}/>
                </ListItem>
            </List>
        </Box>
    )
}