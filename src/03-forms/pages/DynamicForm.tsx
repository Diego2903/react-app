import jsonForm from "../data/custom-form.json";
import { Formik, Form } from "formik";
import { MySelect, MytextInput } from "../components";
import * as Yup from 'yup';


const initialValue: { [x: string]: any } = {};
const validationFields : {[x: string]: any} = {};

for (const input of jsonForm) {
    initialValue[input.name] = input.value

    if (!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations ) {
        if (rule.type === "required") {
            schema = schema.required( rule.desciptions);
        }
        if (rule.type === "minLength") {
            schema = schema.min((rule as any).value, rule.desciptions);
        }
        if (rule.type === "maxLength") {
            schema = schema.max((rule as any).value, rule.desciptions);
        }
        if (rule.type === "email") {
            schema = schema.email(rule.desciptions);
        }
    }

    validationFields[input.name] = schema;
};

const validationsSchema = Yup.object({...validationFields});


export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValue}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={validationsSchema}
            >
                {
                    ({handleReset}) => (
                        <Form>
                            {jsonForm.map(({ label, name, type, placeholder, options }) => {
                                if (type === "email" || type === "password" || type === "input") {
                                    return <MytextInput
                                        key={name}
                                        label={label}
                                        name={name}
                                        type={(type as any)}
                                        placeholder={placeholder} />
                                } else if (type === "select") {
                                    return (
                                        <MySelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value=""> Select an options</option>
                                            {
                                                options?.map(opt => (
                                                    <option value={opt.id} key={opt.id}> {opt.label} </option>
                                                ))
                                            }
                                        </MySelect>
                                    );
                                }
                                throw new Error(`the type : ${type}, not is soported`);
                            })}

                            <button type="submit"> Submit </button>
                            <button onClick={handleReset}>Reset</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    );
};
