import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import "../styles/styles.css"



export const RegisterPage = () => {

    const { isValidEmail, onInputChange, resetForm, formData, name, email, password1, password2 } = useForm({
        name: "",
        email: "",
        password1: "",
        password2: ""
    })

    console.log({ name });


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        console.log(formData);

    }

    return (
        <div>

            <h1>Register Page</h1>

            <form onSubmit={(event) => onSubmit(event)}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onInputChange}
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                {name.trim().length <= 0 && <span> Este campo es obligatorio</span>}

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onInputChange}
                    className={` ${!isValidEmail(email) && "has-error}"}`}
                />
                {!isValidEmail(email) && <span> El email no es valido </span>}

                <input
                    name="password1"
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={onInputChange}
                />
                {password1.trim().length <= 0 && <span> Este campo es obligatorio</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span> La contraseña debe de tener mas de 6 caracteres</span>}


                <input
                    name="password2"
                    type="password"
                    placeholder="Repeat Password"
                    value={password2} 
                    onChange={onInputChange}
                />
                {password2.trim().length <= 0 && <span> Este campo es obligatorio</span>}
                { password2.trim().length > 0 && password1 !== password2 && <span> Las contraseñas no coinciden </span>}

                <button type="submit">Create</button>
                <button type='button' onClick={resetForm}>Reset form</button>
            </form>

        </div>
    )
}
