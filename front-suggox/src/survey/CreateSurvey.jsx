import React, { useEffect, useState, Fragment } from 'react';
import Error from '../core/Error';
import { createForm } from '../form';

function CreateSurvey() {
    const [encuesta, guardarEncuesta] = useState({
        nombre : '',        
        comentario : ''
    })
    const [ error, guardarError ] = useState(false);

    // Destructurando valores
    const { nombre, comentario } = encuesta;

    const handleChange = e => {
        // Cambiar el state
        guardarEncuesta({
            ...encuesta,
            [e.target.name] : e.target.value
        });
    }

    const crearEncuesta = e => {
        e.preventDefault();

        // Validacion de formulario vacio
        if (!nombre || !comentario) {
            guardarError(true);
            return;
        }

        // Se paso la validacion correctamente
        // guardarError(false);
        // // Se usa el API para dar de alta el formulario
        // createForm({ nombre, comentario })
        //     .then(data => {
        //         if (data)
        //     })
        // alert(`ya enviaste la info morrito`);
    }    


    useEffect(() => {        
    }, [])

    return (
        <Fragment>
            <h2>Coloca tu Encuesta</h2>

            {error ? <Error mensaje='Todos los campos son necesarios' /> : null}

            <form 
                onSubmit={crearEncuesta}
            >
                <div className='input-field col-12'>
                    <input  
                        type='text'
                        name='nombre'
                        id='nombre'
                        onChange={handleChange}
                    />
                    <label htmlFor='nombre'>Nombre: </label>
                </div>

                <div className='input-field col-12'>
                    <textarea 
                        style={{color: "red"}}
                        style={divStyle}
                        name='comentario'
                        id='comentario'
                        onChange={handleChange}
                    />
                    <label htmlFor='comentario'>Comentario: </label>
                </div>
                <button type="submit" className="btn btn-primary float-right">Buscar</button>
            </form>
        </Fragment>                
    )
}

export default CreateSurvey;