const { useState, useCallback } = require("react")

const useFetch = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    //o useCallback é usado para não recriar a função sempre que precisar extrair outros dados do hook useFetch
    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try{
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            console.log(json)
            if(response.ok === false) throw new Error(json.message); 
        }catch (error){
            json = null;
            setError(error.message);
        }finally{
            setData(json);
            setLoading(false);
            return {response, json}
        }
    }, [])

    return { data, loading, error, request }
}

export default useFetch;
