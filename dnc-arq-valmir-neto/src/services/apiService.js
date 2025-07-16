const apiService = async (endingpoint, params) => {
    try {
        const url = endingpoint;
         const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`houve um erro  ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data
    } catch (err) {
        console.error(err);
        return [];  
    }
 }

 export default apiService
  
