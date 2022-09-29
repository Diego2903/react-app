
import { Form, Formik } from 'formik';
import { MytextInput } from '../components/MytextInput';
import * as Yup from "yup";

import "../styles/styles.css"


export const RegisterFormikPage = () => {


    return (
        <div>

            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password1: "",
                    password2: ""
                }}
                onSubmit={value => {
                    console.log(value);

                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, "El nombre no debe de tener menos de 2 caracteres")
                            .max(15, "el nombre no debe de tener mas de 15 caracteres")
                            .required("Este campo requerido"),
                        email: Yup.string()
                            .email("El email debe de tener un formato valido")
                            .required("Este campo es requerido"),
                        password1: Yup.string()
                            .min(6, "La contraseña debe de tener al menos 6 caracteres")
                            .required("Este campo es requerido")
                            .matches(/[a-zA-Z]/, "La contraseña solo puede contener letras latinas"),
                        password2: Yup.string()
                            .min(6, "La contraseña debe de tener al menos 6 caracteres")
                            .required("Este campo es requerido")
                            .oneOf([Yup.ref('password1'), null], 'Las contraseñas no coinciden')
                            .matches(/[a-zA-Z]/, "La contraseña solo puede contener letras latinas"),
                    })

                }
            >
                {
                    ({handleReset}) => (

                        <Form>
                            
                            <MytextInput label="Nombre" name="name" placeholder="Ingresa tu nombre" />
                            <MytextInput label="Email" name="email" placeholder="ejemplo@gmail.com" type="email"/>
                            <MytextInput label="Password1" name="password1" placeholder="Ingresa tu contraseña" type="password" />
                            <MytextInput label="Password2" name="password2" placeholder="Ingresa nuevamente tu contraseña" type="password"/>

                            <button type="submit">Create</button>
                            <button type='button' onClick={handleReset}>Reset form</button>
                        </Form>
                    )
                }
            </Formik>


        </div>
    )
}
