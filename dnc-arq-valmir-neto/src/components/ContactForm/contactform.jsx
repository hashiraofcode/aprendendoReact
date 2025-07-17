import '../ContactForm/contactform.css'
import { useState,useEffect } from 'react'
// Components
import ButtonSumbmite from '../buttonsAplication/button'
function ContactForm() {
const [formData, setFormData] = useState({
    name:'',
    email: '',
    message: '',
});
const [isFormValid, setIsFormValid] = useState(false);
// função que captura as informações passadas no input;
const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]:value
    });
};
const emailIsValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
}
useEffect(() => {
    console.log(formData)
    const isValid = formData.name.trim() && 
    emailIsValid(formData.email) && 
    formData.email.trim() && 
    formData.message.trim()
    console.log(isValid);
    setIsFormValid(isValid);
},[formData])



    // componente
    return (
        <div className="container contact-container flex-container jc-center flex-direction">
            <h2 className='contact-title flex-container jc-center font-other-titles'>We love meeting new people<br/>and helping them.</h2>
            <form action="">
                <div className='flex-container form-group-container jc-center'>
                    <input 
                    type="text" 
                    name='name'
                    id='name'
                    placeholder='Name *'
                    className='font-text text-secundary form-group-input'
                    onChange={handleChange}
                    />
                    <input 
                    type="email" 
                    name='email'
                    id='email'
                    placeholder='E-mail *'
                    className='font-text text-secundary form-group-input'
                     onChange={handleChange}
                    />
                </div>
                <div className='flex-container form-group-container jc-center'>
                    <textarea 
                    name="message" 
                    id="message"
                    rows='4'
                    className='form-group-textArea font-text text-secundary'
                    placeholder='escreva...'
                     onChange={handleChange}
                    ></textarea>
                </div>
                <div className='flex-container form-group-container jc-end'>
                    <ButtonSumbmite StyleButton={'secundary'} type='submite' disabled={!isFormValid}>Enviar</ButtonSumbmite>
                </div>  
            </form>
        </div>
    )
}

export default ContactForm