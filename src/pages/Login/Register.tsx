import {LRBar} from "@/components/common/LrBar"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from "@/im/DataRD6.svg"
import { useFetchAndLoad } from "@/hooks/useFetchAndLoad"
import { getUserRegister } from "@/services/user.service"
import { SnackbarUtilities } from '@/utilities/snackbar.utility';
import {
  useNavigate,
} from "react-router-dom";
import { useYupValidationResolver } from '@/hooks/useYupValidationResolver';
import { useForm } from 'react-hook-form';
import { userRegisterValidationSchema } from '@/models/validations/user.validation';
import { ReactComponent as Salud } from "@/im/LogoSaludPublica.svg"
export default function Register() {

  let navigate = useNavigate();
  const resolver = useYupValidationResolver(userRegisterValidationSchema)
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver })
  const { loading, callEndpoint } = useFetchAndLoad()


  const handler = async (data:any) => {

    try {
      const response = await callEndpoint({ call: getUserRegister(data) })
      if (response.status >= 200 && response.status < 300) {
        SnackbarUtilities.info("Usuario Registrado. Redireccionado al Login")
        setTimeout(() => {
          navigate("/")
        }, 2000)
      }
    } catch (err:any) {
      if (err.response.data) {
        SnackbarUtilities.error(err.response.data)
      } else {
        SnackbarUtilities.error("Error de red. Por favor reintente")
      }

    }
  }

  return (
    <Grid container component="main" sx={{backgroundColor: "#edf4ff",height:"100%" }}>
      <CssBaseline />
      <Grid 
        
        item
        xs={false}
        sm={5}
        md={6}
        sx={{
          backgroundImage: `url(${logo})`,
          backgroundColor: "#edf4ff",
          backgroundSize: 300,
          backgroundPosition: "40% 23%",
          backgroundRepeat: 'no-repeat',
          opacity: loading ? 0.4 : 1,
          
        }}
      >
      </Grid>
      <Grid item xs={12} sm={7} md={6}   component={Paper} square>
        <LRBar className='AppBar'></LRBar>
        <Box
          sx={{
            my:11,
            mx: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div className='logo'>
            <Salud style={{ width: 300 }}></Salud>
          </div>

          <Typography variant='h4' color="primary" sx={{
            marginTop: -1,
            marginBottom: 2
          }}>
             {"REPORTES"}
          </Typography>
          <Typography variant='h6' color="primary" sx={{
              width:300,
              marginTop:-1,
              marginBottom:2,
              
            }}>
                  {"REGISTRARSE"} 
            </Typography>
          <Box component="form" onSubmit={handleSubmit(data => handler(data))}
            sx={{
              display: 'flex',
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "60%", mt: 1.3,
            }}
          >
            <TextField
              error={(errors?.email != null) || (errors?.email != undefined)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nombre de Usuario"
              autoComplete="email"
              autoFocus
              {...register("email")}
              helperText={errors?.email?.message} 
              
              sx={{
                width:300,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'blue',
                    borderRadius: "10px"
                  }
                }
              }}
            />
            <TextField
              error={(errors?.first_name != null) || (errors?.first_name != undefined)}
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="Nombre"
              autoFocus
              {...register("first_name")}
              helperText={errors?.first_name?.message}
              sx={{
                width:300,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'blue',
                    borderRadius: "10px"
                  }
                }
              }}
            />
            <TextField
              error={(errors?.last_name != null) || (errors?.last_name != undefined)}
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="Apellidos"
              autoFocus
              {...register("last_name")}
              helperText={errors?.last_name?.message}
              sx={{
                width:300,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'blue',
                    borderRadius: "10px"
                  }
                }
              }}
            />
            <TextField
              error={(errors?.password != null) || (errors?.password != undefined)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
              helperText={errors?.password?.message}
              sx={{
                width:300,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'blue',
                    borderRadius: "10px"
                  }
                }
              }}
            />
            <TextField
              error={(errors?.password_repeat != null) || (errors?.password_repeat != undefined)}
              margin="normal"
              required
              fullWidth
              name="password-repeat"
              label="Repetir su contraseña"
              type="password"
              id="password-repeat"
              {...register("password_repeat")}
              helperText={errors?.password_repeat?.message}
              sx={{
                width:300,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'blue',
                    borderRadius: "10px"
                  }
                }
              }}
            />
            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2,width:300 }}
              disabled={loading}
            >
              {loading ? "Registrando" : "Registrar"}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}