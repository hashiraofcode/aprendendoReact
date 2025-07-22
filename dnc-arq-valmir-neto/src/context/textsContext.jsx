import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [language, setLanguage] = useState('br');
    const [contentApplication, setContentApplication] = useState(null);
    const [loadingThisContent, setLoadingThisContent] = useState(true);

    useEffect(() => {
        const fetchTexts = async () => {
            try {
                const response = await fetch('/api/webText');
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


    return (
        <AppContext.Provider value={{ contentApplication, setLanguage, language, loadingThisContent,}}>
            {children}
        </AppContext.Provider>
    )
}