import React, {useState} from 'react';
import ContainerRightMainSectionButton from "../../Home/HomeSections/SectionMain/ContainerRightMainSectionButton";
import {z} from 'zod'

const Login = () => {
    const [errors, setErrors] = useState([])

    const formSchema = z.object({
        email: z.string().min(5).email(),
        password: z.string().min(6, "Hasło jest za krótkie!")
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const elements = e.target.elements
        const formData = {
            email: elements.email.value,
            password: elements.password.value
        }

        const response = formSchema.safeParse(formData)

        if (!response.success) {
            setErrors(response?.error?.issues)
            return
        }

        setErrors([])
    }

    return (
        <div className="containerRegister">
            <h3>
                Zaloguj się
            </h3>
            <div className="decoration"></div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="inputsRegister">
                        <div>
                            <label form="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder=""/><br/>

                        </div>

                        <div>
                            <label form="password">Hasło</label>
                            <input type="text" id="password" name="password" required placeholder=""/>
                            {errors.filter((error) => error.path.includes('password')).map(({message}, index) => <span key={index}>{message}</span>)}
                        </div>


                        <button type="submit">Zaloguj się</button>
                    </div>

                    <div className="registerButtons login">
                        <ContainerRightMainSectionButton buttonText="Załóż konto" navigateTo="/rejestracja"/>
                        <ContainerRightMainSectionButton buttonText="Zaloguj się" navigateTo="/logowanie"/>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;