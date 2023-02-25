import { Box,Skeleton } from "@mui/material";

const cardXS = {
    width: 350,
    margin: '10px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: "column"
    
  }

export function SkeletonCard(){
    return (
        <Box sx={cardXS}>
           <Skeleton variant="circular" width={90} height={90} /> 
           <Skeleton sx={{
            margin:5
           }} variant="rectangular" width={300} height={100} animation={"pulse"}/>
           <Skeleton variant="rectangular" width={300} height={100} animation={"pulse"}/> 
        </Box>
    )
}