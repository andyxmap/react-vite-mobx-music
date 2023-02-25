import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { deepPurple } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import avatar from "@/im/illustration_avatar.png";

const drawerWidth: number = 250;
interface MainOptions {
  username: string
  content: React.ReactElement
}


const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: "hsla(208, 100%, 17%, .7)",
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '&.MuiDrawer-root': {
    backgroundColor: "#edf4ff",

  },
  '& .MuiDrawer-paper': {

    position: 'relative',
    backgroundColor: "#edf4ff",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),

    boxSizing: 'border-box',
    ...(!open && {

      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
        backgroundColor: "#edf4ff",

      }
    })
  }
}));

export default function MainLayout(props: MainOptions) {

  const username: string = props.username
  const [open, setOpen] = React.useState(true);
  const { content } = props;
  const toggleDrawer = () => {
    setOpen(!open);
  };



  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Drawer
        variant="permanent"
        open={open}
        ModalProps={{
          keepMounted: true,
          hideBackdrop: true,

        }}
        classes={{ paper: "rootstyle" }}

      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRIcon />}
          </IconButton>
        </DrawerHeader>


        <Box sx={{ padding: '2px' }}>
          {open ? (<AccountStyle>
            <Avatar sx={{ bgcolor: deepPurple[500], margin: '2px' }} src={avatar}></Avatar>
            <Box sx={{ ml: 1 }}>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {username}
              </Typography>

            </Box>
          </AccountStyle>
          ) : ""}
        </Box>




        <Divider />

      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
          minWidth: "100%",
          minHeight: "100%"
        }}
      >
        {content}
      </Box>
    </Box>
  );
}
