import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const savedLang = localStorage.getItem('lang');
    const [language, setLanguage] = useState(savedLang ?? 'br');
    const [contentApplication, setContentApplication] = useState(null);
    const [loadingThisContent, setLoadingThisContent] = useState(true);
    

    useEffect(() => {
        const fetchTexts = async () => {
            try {
                const response = await fetch('/.netlify/functions/fetch');
                if (response.ok) {
                     const {textos} = await response.json();
                     setContentApplication(textos);
                } else throw new Error(`Erro: ${response.status} = ${response.text}`);
                console.log(response)
            } catch (e) {
                console.error(e);
            } finally {
                setLoadingThisContent(false);
            }
        }
        
        fetchTexts();
    }, [])

    useEffect(()=> { 
        localStorage.setItem('lang', language);
    },[language])

    return (
        <AppContext.Provider value={{ contentApplication, setLanguage, language, loadingThisContent,}}>
            {children}
        </AppContext.Provider>
    )
}