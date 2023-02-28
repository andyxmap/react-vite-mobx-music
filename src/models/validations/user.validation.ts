import * as yup from "yup";

export const userLoginValidationSchema = yup.object({
    username: yup.string().required("Campo Requerido").email("Debe ser un email valido. Ej: rd@example.com"),
    password: yup.string().required("Campo Requerido").min(8,"La constraseña deber tener mas de 8 caracteres")
  });

export const userRegisterValidationSchema = yup.object({
    email: yup.string().required("Campo Requerido").email("Debe ser un email valido. Ej: rd@example.com"),
    first_name: yup.string().required("Campo Requerido").matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          'Este campo solo puede contener letras.'
      ),
    last_name: yup.string().required("Campo Requerido").matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
          'Este campo solo puede contener letras.'
      ),
    password: yup.string().required("Campo Requerido").min(8,"La constraseña deber tener mas de 8 caracteres"),
    password_repeat: yup.string().label('Confirme contraseña').required().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir'),
  });

  //example infer type from yup validator
  type userInferType = yup.InferType<typeof userLoginValidationSchema>;
  
  

  