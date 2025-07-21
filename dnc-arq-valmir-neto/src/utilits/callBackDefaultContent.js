export const callBackDefaultContent = (data, language,path,propertie, fallback = 'carregando...') => {
    return data?.[language]?.[path]?.[propertie] ?? fallback
}

// função que garante que a aplicação não vai quebrar caso os dados assincronos ainda não estejam prontos;