import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

import { createAnswer } from './apiUser';

const SurveyAnswer = (props) => {
    const {id : survey_id} = props.match.params

    console.log(survey_id);

    const [values, setValues] = useState({
        simple_answer: "",
        long_answer: "",
        loading: false,
        error: "",
        createdAnswer: '',
        formData: ""
    });

    const { user, token } = isAuthenticated();

    const { simple_answer, long_answer, loading, error, createdAnswer, formData } = values;

    const init = () => {
        setValues({
            ...values,
            formData: new FormData()
        });
    };


    useEffect(() => {
        init();
    }, [])

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        formData.set(name, value);        
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        
        createAnswer(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    photo: "",
                    loading: false,
                    createdAnswer: data.name
                });
            }
        });
    };

    const answerForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Respuesta corta</label>
                <textarea
                    onChange={handleChange}
                    className="form-control"
                    value={simple_answer}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Respuesta Larga</label>
                <textarea
                    onChange={handleChange}
                    className="form-control"
                    value={long_answer}
                />
            </div>

            <button className="btn btn-outline-primary">Crear Encuesta</button>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: createdAnswer ? "" : "none" }}
        >
            <h2>Respuesta creada exitosamente!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
        <Layout
            title="Agregar una respuesta"
            description={`${user.name}, proporciona tu respuesta`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>{survey_id}</h1>
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {answerForm()}
                </div>
            </div>
        </Layout>
    )
}

export default SurveyAnswer
