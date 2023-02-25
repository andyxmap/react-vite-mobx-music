
import { Box, CircularProgress } from "@mui/material"

export const Loader = () => {

    return (
        <Box style={{display:"grid",placeItems:"center",height:"100vh",backgroundColor:"#edf4ff"}}>
            <CircularProgress/>
        </Box>
    )
}


export default Loader;