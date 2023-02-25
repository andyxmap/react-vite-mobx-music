import { MenuItem, Select, SelectChangeEvent } from "@mui/material"

interface SelectProps{
    value:string,
    options: Array<string>
    handleChange: (event: SelectChangeEvent) => void
}

export const SelectAny = (props:SelectProps)=>{
    return (<Select
            variant="standard"
            labelId="select-label"
            id="select-provider"
            value={props.value}
            onChange={props.handleChange}
            label="Proveedor"
            sx={{
                marginLeft: 1,
                marginBottom: 2,
                

            }}
        >
            <MenuItem  value="">
                <em>Todos</em>
            </MenuItem>
            {props.options && props.options.map((p,index) => <MenuItem key={index} value={p}>{p}</MenuItem>)}

        </Select>)
}