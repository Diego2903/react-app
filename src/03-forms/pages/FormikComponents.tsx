import "../styles/styles.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


export const FormikCompoenents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="span" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="LastName" type="text" />
                            <ErrorMessage name="lastName" component="span" />

                            <label htmlFor="emailAdrres">Email address</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select">
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType"/>
                            <label className="checkbox">
                                <Field type="checkbox" name="terms"  />
                                Terms and Conditions
                                <ErrorMessage name="terms" component="span" />
                                
                            </label>
                            

                            <button type="submit">Submit</button>
                        </Form>

                    )}


            </Formik>

        </div>
    );
};
