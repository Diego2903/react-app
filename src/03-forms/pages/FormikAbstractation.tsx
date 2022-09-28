import { Formik, Form,  } from "formik";
import * as Yup from "yup";
import { MytextInput, MyCheck, MySelect } from "../components";
import "../styles/styles.css";


export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: ""
                }}
                onSubmit={value => {
                    console.log(value);

                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, "Must be 15 characteres or less")
                            .required("required"),
                        lastName: Yup.string()
                            .max(15, "Must be 15 characteres or less")
                            .required("required"),
                        email: Yup.string()
                            .email("the email does not have a valid format")
                            .required("required"),
                        terms: Yup.boolean()
                            .oneOf([ true], "You must accept the terms and conditions")
                            .required("required"), 
                        jobType: Yup.string()
                            .required("required")
                    })
                }
            >
                {
                    (formik) => (


                        <Form>
                            <MytextInput label="First Name" name="firstName" placeholder="Name"/> 
                         
                            <MytextInput label="Last Name" name="lastName" placeholder="Second Name"/> 

                            <MytextInput label="Email" name="email" placeholder="email@gmail.com" type="email"/> 
 
                            <MySelect label="jobType" name="jobType" as="select">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>
                    
                            <MyCheck label="Terms and Conditions" name="terms"  /> 

                            <button type="submit">Submit</button>
                        </Form>

                    )}

            </Formik>

        </div>
    );
};
