import {RootStyle,SimpleBarStyle} from "@/styled-components/mui/Scrollbar"
import { Box } from '@mui/material';

export default function Scrollbar({ children, sx, ...other }:any) {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    if (isMobile) {
      return (
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }
  
    return (
      <RootStyle>
        <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
          {children}
        </SimpleBarStyle>
      </RootStyle>
    );
  }