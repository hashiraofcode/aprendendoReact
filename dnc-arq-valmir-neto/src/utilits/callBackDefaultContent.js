export const callBackDefaultContent = (data, language,path,propertie, fallback = 'carregando...') => {
    return data?.[language]?.[path]?.[propertie] ?? fallback
}