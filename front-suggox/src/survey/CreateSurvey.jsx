import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CreateSurvey() {
    const [ valores, guardarValores ] = useState([]);

    const consultarApi = async () => {
        // Consultar api
        const resultado = await axios.get('http://');
        guardarValores(resultado)
    }

    useEffect(() => {

    }, [])
    return (
        <div>            
            <h1>hola desde survey</h1>
        </div>
    )
}

export default CreateSurvey
