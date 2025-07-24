export const handler = async () => {
    try {
        const [data1, data2] = await Promise.all([
            fetch('https://react.dnc.group/files/webText'),
            fetch('https://react.dnc.group/files/projects'),
        ])
        if ( data1.ok && data2.ok) {
            const [resp1, resp2] = await Promise.all([
            data1.json(), 
            data2.json()
        ]);

         return {
            statusCode: 200,
            body: JSON.stringify({
                projetos: resp2,
                textos: resp1
            })
        };
        } else {
            throw new Error('teve um erro no fetch')
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(`Ocorreu um erro: ${err}`)
        }
    }
}