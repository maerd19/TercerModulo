import React, { useEffect } from 'react';

function SurveyList() {

    const [ info, guardarInfo ] = useState({});

    const consultarSurveys = async () => {
        const resultado = await axios.get('https://api.github.com/users/maerd19');
        guardarInfo(resultado.data)       
    }

    useEffect(() => {
        consultarSurveys();
    }, [])
    
    return (
        <div>
            <h1>esto es una prueba para renderizar la lista de encuestas</h1>
        </div>
    )
}

export default SurveyList
