import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
    Alert,
  } from "@material-tailwind/react";
  import { yupResolver } from "@hookform/resolvers/yup"
  import {useForm, Controller} from "react-hook-form"
  import {userLoginValidationSchema} from "@/models/validations/user.validation" 
import { useState } from "react";
  interface UserForm {

    username:string
    password:string

  }

  export default function UserLogin() {

    const [show, setShow] = useState(false)

    const defaultFormData:UserForm = {
        username:"",
        password:""
    }

    const {handleSubmit,control,formState:{ errors } } = useForm<UserForm>({
        defaultValues:defaultFormData,
        reValidateMode: "onChange",
        resolver: yupResolver(userLoginValidationSchema)
    })

    const onSumbit = () => {
        setShow(true)
    }
    
    return (
      <Card className="w-full sm:w-96 mt-10 h-full">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Acceder
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Controller 
          control={control}
          name="username"
          render={({field:{onChange,value}})=> <Input error={Boolean(errors.username)} label="Usario" size="lg" onChange={onChange} value={value}/>}
        
          />  
          <Controller 
          control={control}
          name="password"
          render={({field:{onChange,value}})=> <Input error={Boolean(errors.password)} label="Contraseña" size="lg" onChange={onChange} value={value}/>}/>  
          <div className="-ml-2.5">
            <Checkbox label="Recuerdame" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={handleSubmit(onSumbit)}>
            Acceder
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            No tienes cuenta
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue"
              className="ml-1 font-bold"
            >
              Registrate
            </Typography>
          </Typography>
        </CardFooter>
        <Alert
        color="red"
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
          initial: { opacity : 1}
        }}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        El usuario va a acceder.
      </Alert>
      </Card>
    );
  }