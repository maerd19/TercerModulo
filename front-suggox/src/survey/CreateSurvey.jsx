import React, { useEffect, useState, Fragment } from 'react';
import Error from '../core/Error';
import Exito from '../core/Exito';
import { isAuthenticated } from "../auth";
import { createForm } from './index';

function CreateSurvey() {
    const [encuesta, guardarEncuesta] = useState({
        name : '',        
        description : ''
    });
    const [ error, guardarError ] = useState(false);
    const [ exito, guardarExito ] = useState(false);
    // Destructurando valores del estado
    const { name, description } = encuesta;
    // Destructurando user y token de localstorage
    const { user, token } = isAuthenticated();
    // Funciones
    const handleChange = e => {
        // Cambiar el valor del estado
        guardarEncuesta({
            ...encuesta,
            [e.target.name] : e.target.value
        });
    }

    const crearEncuesta = e => {
        console.log('por favor functiona :(')
        e.preventDefault();
        // Validacion de formulario vacio
        if (!name || !description) {
            guardarError(true);
            return;
        }        
        // Se paso la validacion correctamente
        guardarError(false);
        // Se usa el API para dar de alta el formulario
        createForm(user._id, token, { name, description }).then(data => {
            if (data.error) {
                guardarError(true);
            } else {
                guardarError(false);
                guardarExito(true);
            }
        });
    };


    // useEffect(() => {        
    // }, [])

    return (
        <Fragment>
            <h2>Coloca tu Encuesta</h2>
            {error ? <Error mensaje='Todos los campos son necesarios' /> : null}
            {exito ? <Exito mensaje='Encuesta creada exitosamente' /> : null}

            <form 
                onSubmit={crearEncuesta}
            >
                <div className='input-field col-12'>
                    <input  
                        type='text'
                        name='name'
                        id='name'
                        onChange={handleChange}
                    />
                    <label htmlFor='name'>Nombre: </label>
                </div>

                <div className='input-field col-12'>
                    <textarea 
                        style={{color: "red"}}
                        name='description'
                        id='description'
                        onChange={handleChange}
                    />
                    <label htmlFor='description'>Comentario: </label>
                </div>
                <button type="submit" className="btn btn-primary float-right">Crear</button>
            </form>
        </Fragment>                
    )
}

export default CreateSurvey;