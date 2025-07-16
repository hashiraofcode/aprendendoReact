 export const apiService = async (endingpoint, parms) => {
    try {
        const URL = new URL (`https://react.dnc.group/files/${endingpoint}`);
        const apiData = fetch(URL);
        const response = await apiData;
        if(!response.ok) {
            throw new Error(`houve um erro  ${response.status}: ${response.statusText}`);
        }
        const data = await response.json;
        return data
    } catch (err) {
        console.error(err);
    }
 }
  
