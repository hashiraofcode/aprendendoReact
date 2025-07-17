import '../ContactForm/contactform.css'

function ContactForm() {
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
                    />
                    <input 
                    type="email" 
                    name='email'
                    id='email'
                    placeholder='E-mail *'
                    className='font-text text-secundary form-group-input'
                    />
                </div>
                <div className='flex-container form-group-container jc-center'>
                    <textarea 
                    name="message" 
                    id="message"
                    rows='4'
                    className='form-group-area'
                    ></textarea>
                </div>
                <div className='flex-container form-group-container jc-end'>
                    <button type='submite'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm