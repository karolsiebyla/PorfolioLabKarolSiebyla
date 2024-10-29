import React, {useState} from 'react';
import ContainerRightMainSectionButton from "../../Home/HomeSections/SectionMain/ContainerRightMainSectionButton";
import {z} from 'zod'

const Register = () => {

    const [errors, setErrors] = useState([])

    const formSchema = z.object({
        email: z.string().min(4).email(),
        password: z.string().min(6, "Hasło jest za krótkie!")
    })

    const schema = z.object({
        password: z.string().min(6),
        password2: z.string().min(6),
    }).refine(({password, password2}) => password === password2, {
        message: "Hasła nie są identyczne.",
        path: ['password2'],
        }
    );

    const handleSubmit =(e) => {
        e.preventDefault()

        const elements = e.target.elements
        const formData = {
            email: elements.email.value,
            password: elements.password.value,
            password2: elements.password2.value,
        }

        const response = formSchema.safeParse(formData)

        const validationResult = schema.safeParse(formData);

        if (!validationResult.success) {
            console.error(validationResult.error.issues);
        } else {
            console.log("Hasła są identyczne!");
        }

        if (!response.success) {
            setErrors(response?.error?.issues)
            return
        }

        setErrors([])

    }



    return (
        <div className="containerRegister">
            <h3>
                Załóż konto
            </h3>
            <div className="decoration"></div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="inputsRegister">
                        <div>
                            <label form="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder=""/><br/>
                            {errors.filter((error) => error.path.includes('password')).map(({message}, index) => <span key={index}>{message}</span>)}
                        </div>

                        <div>
                            <label form="password">Hasło</label>
                            <input type="text" id="password" name="password" required placeholder=""/>
                        </div>

                        <div>
                            <label form="passwordRepeat">Powtórz hasło</label>
                            <input type="text" id="passwordRepeat" name="passwordRepeat" required placeholder=""/>
                        </div>

                        <button type="submit">Załóż konto</button>


                    </div>

                    <div className="registerButtons register">
                    <ContainerRightMainSectionButton buttonText="Zaloguj się" navigateTo="/logowanie"/>
                    <ContainerRightMainSectionButton buttonText="Załóż konto" navigateTo="/"/>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Register;