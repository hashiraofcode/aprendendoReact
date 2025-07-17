import '../ContactForm/contactform.css'
import { useState, useEffect } from 'react'
// Components
import ButtonSumbmite from '../buttonsAplication/button'
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoadingSubmit, setIsloadingSubmit] = useState(false);
    const [isSubmittedSuccess, setSubmittedSuccess] = useState(false);
    const handleSubmite = async (e) => {
        e.preventDefault();
        try {
            setIsloadingSubmit(true);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, access_key: '2ca905a5-1b62-44a3-a1c1-6fccae7c667a' })
            })

            if (response.ok) {
                setSubmittedSuccess(true);
            }
        } catch (e) {
            console.log('Erro: ', e);
        } finally {
            setIsloadingSubmit(false);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
        }
    }

    // função que captura as informações passadas no input;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // função que verifica se o email é válido
    const emailIsValid = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }
    // executa a verificação quando o usuário interage com o inputs
    useEffect(() => {
        console.log(formData)
        const isValid = formData.name.trim() &&
            emailIsValid(formData.email) &&
            formData.email.trim() &&
            formData.message.trim()
        console.log(isValid);
        setIsFormValid(isValid);
    }, [formData])



    // componente
    return (
        <div className="container contact-container flex-container jc-center flex-direction">
            <h2 className='contact-title flex-container jc-center font-other-titles'>We love meeting new people<br />and helping them.</h2>
            <form action="" onSubmit={handleSubmite}>
                <div className='flex-container form-group-container jc-center'>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        placeholder='Name *'
                        className='font-text text-secundary form-group-input'
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='E-mail *'
                        className='font-text text-secundary form-group-input'
                        onChange={handleChange}
                         value={formData.name}
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
                        value={formData.name}
                    ></textarea>
                </div>
                <div className='flex-container form-group-container jc-end message-wrapper flex-align-center'>
                    {isSubmittedSuccess && <p className='font-text'>Sucsses in form submite</p>}
                    <ButtonSumbmite StyleButton={'secundary'} type='submite' disabled={!isFormValid || isLoadingSubmit}>Enviar</ButtonSumbmite>
                </div>
            </form>
        </div>
    )
}

export default ContactForm