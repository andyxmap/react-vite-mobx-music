import { Input, Button } from "@material-tailwind/react";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, Controller } from "react-hook-form"
import { mapValidationSchema } from "@/models/validations/map.validation";
import { useEffect } from "react";

interface MapForm {
    firststreet: string
    secondstreet: string
    mainstreet: string
}


export default function ({handler,load}:{handler:(data:MapForm)=>void, load:boolean}) {

    const defaultFormData: MapForm = {
        firststreet: "",
        secondstreet: "",
        mainstreet: ""
    }
    
    const { handleSubmit, control, formState: { errors } } = useForm<MapForm>({
        defaultValues: defaultFormData,
        reValidateMode: "onChange",
        resolver: yupResolver(mapValidationSchema)
    })
    
    return (
        <div className="flex justify-between flex-wrap p-3 gap-4 sm:flex-nowrap">
            <Controller
                name="firststreet"
                control={control}
                render={({ field: { onChange, value } }) => <Input label="First Street" value={value} onChange={onChange}  className=" text-white placeholder:text-white" error={Boolean(errors.firststreet)}></Input>
                }
            />
            <Controller
                name="secondstreet"
                control={control}
                render={({ field: { onChange, value } }) => <Input label="Second Street" value={value} onChange={onChange}  className="text-white " error={Boolean(errors.secondstreet)} ></Input>
                }
            />
            <Controller
                name="mainstreet"
                control={control}
                render={({ field: { onChange, value } }) => <Input label="Main Street" value={value} onChange={onChange}  className="text-white " error={Boolean(errors.mainstreet)}></Input>
                }
            />
            <Button variant="gradient" fullWidth onClick={handleSubmit(handler)} >
               { load ? "Geocoding" : "Geocode"  }
            </Button>
        </div>
    )
}