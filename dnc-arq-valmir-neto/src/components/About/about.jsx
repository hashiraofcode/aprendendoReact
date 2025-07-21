import '../About/about.css'
import { useContext } from 'react';

//CONTEXTO
import { AppContext } from '../../context/textsContext';

// UTILITS
import { callBackDefaultContent } from '../../utilits/callBackDefaultContent';


function About() {
    const contextData = useContext(AppContext);
    const contentApplication = contextData?.contentApplication;
    const language = contextData?.language;


    return (
        <div className="container aboutContent flex-container">
            <h3 className='title-about-content font-other-titles'>{callBackDefaultContent(contentApplication, language, 'about','title')}</h3>
            <div className="content-wrapper flex-container flex-direction">
                <p className='text-primary font-text'>{callBackDefaultContent(contentApplication, language, 'about','p1')}</p>
                <p className='text-tertiary font-text'>{callBackDefaultContent(contentApplication, language, 'about','p2')}</p>
                <p className='text-tertiary font-text'>{callBackDefaultContent(contentApplication, language, 'about','p3')}</p>
            </div>
        </div>
    )
}

export default About