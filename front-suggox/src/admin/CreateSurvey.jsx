import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";

import { createSurvey } from "./apiAdmin";

const AddSurvey = () => {
    const [values, setValues] = useState({
        name: "",
        description: "",
        photo: "",
        loading: false,
        error: "",
        createdSurvey: "",
        formData: ""
    });

    const { user, token } = isAuthenticated();
    
    const {
        name,
        description,
        loading,
        error,
        createdSurvey,
        formData
    } = values;

    const init = () => {
        setValues({
            ...values,
            formData: new FormData()
        });
    };

    useEffect(() => {
        init();
    }, []);

    // High Order Function
    const handleChange = name => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);        
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });
        
        createSurvey(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    photo: "",
                    loading: false,
                    createdSurvey: data.name
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Fotografia</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Nombre</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Descripcion</label>
                <textarea
                    onChange={handleChange("description")}
                    className="form-control"
                    value={description}
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
            style={{ display: createdSurvey ? "" : "none" }}
        >
            <h2>{`${createdSurvey}`} se creo exitosamente!</h2>
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
            title="Agregar una encuesta"
            description={`${user.name}, completa los campos`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    );
};

export default AddSurvey;