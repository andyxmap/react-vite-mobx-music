import * as yup from "yup";

export const mapValidationSchema = yup.object({
    firststreet: yup.string().required("Campo Requerido"),
    secondstreet: yup.string().required("Campo Requerido"),
    mainstreet: yup.string().required("Campo Requerido"),});