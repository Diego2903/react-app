import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";


export const FormikYupPAge = () => {

    const { getFieldProps, handleSubmit, errors, touched   } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: (evento) => {
            console.log(evento);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characteres or less")
                .required("required"),
            lastName: Yup.string()
                .max(15, "Must be 15 characteres or less")
                .required("required"),
            email: Yup.string()
                .email("the email does not have a valid format")
                .required("required")
        })
    });

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    { ...getFieldProps("firstName")}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    { ...getFieldProps("lastName")}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="emailAdrres">Email address</label>
                <input
                    type="email"
                    { ...getFieldProps("email")}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>

        </div>
    );
};
