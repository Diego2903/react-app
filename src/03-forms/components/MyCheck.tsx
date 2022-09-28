import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheck = ({ label, ...props }: Props) => {

    const [field] = useField({ ...props, type: "checkbox" });

    return (
        <div className="checkbox">
            
            <label>

                <input type="checkbox" {...field} {...props} />
                {label}

            </label>
            <ErrorMessage name={props.name} component="span" />

        </div>
    )
}
