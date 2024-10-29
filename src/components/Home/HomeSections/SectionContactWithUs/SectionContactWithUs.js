import React from 'react';

const SectionContactWithUs = () => {

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const elements = e.target.elements
        const formData = {
            name: elements.name.value,
            email: elements.email.value,
            message: elements.message.value
        }

       try {
           const resp = await fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
               "method": "POST",
               "headers": {
                   "Content-Type": "application/json"
               },
               "body": JSON.stringify(formData)
           })

           if (!resp.ok) {
               throw new Error("Invalid form data")
           }

           const {status} = await resp.json()

           console.log(status)

           // success
       } catch (e) {
           // error

           console.log(e.message)
       }
    }

   const onSubmit = async (data) => {
       const resp = await fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
           "method": "POST",
           "headers": {
               "Content-Type": "application/json"
           },
           "body": JSON.stringify(data)
       })

       if (!resp.ok) {
           throw new Error("Server error.") // logowanie błędu
       }

       const responseData = await resp.json()
       console.log('Response data', responseData);
   }

    return (
        <div className="contactWithUs">
            <div className="contactFormPicture"></div>
            <div className="contactForm">
                <div className="contactFormTitle">
                    Skontaktuj się z nami
                </div>

                <div className="decorationContactWithUs"></div>

                <form className="submitForm" onSubmit={(e)=>handleFormSubmit(e)}>
                    <div className="inputs">
                        <div className="nameForm">
                            <label form="name">Wpisz swoje imię</label>
                            <input type="text" id="name" name="name" required placeholder="Krzysztof"/>
                        </div>
                        <div className="emailForm">
                            <label form="email">Wpisz swój email</label>
                            <input type="email" id="email" name="email" required placeholder="abc@xyz.pl"/><br/>
                        </div>
                    </div>
                    <label form="message">Wpisz swoją wiadomość</label>
                    <textarea id="message" name="message" rows="4" cols="50" required placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea><br/>

                    <input className="submit" type="submit" value="Wyślij"/>

                </form>

            </div>

        </div>
    );
};

export default SectionContactWithUs;