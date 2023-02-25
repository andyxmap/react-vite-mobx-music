import { styled } from '@mui/material';
import { Box } from '@mui/system';
import NotFoundImg from '@/im/not-found.jpg';

const StyledImg = styled('img')(() => ({
    width: "80%",
    height: "80%",
    margin: "auto"
}))

export default function NotFoundPage() {
    return (
        <Box sx={{ display: "flex"}}>
            <StyledImg src={NotFoundImg} />
        </Box>
    )
}