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
                const response = await fetch('https://react.dnc.group/files/webText');
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} = ${response.text}`);
                }
                setContentApplication(data);
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