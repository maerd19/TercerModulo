import React, { useState, useEffect } from 'react';
import Layout from "../core/Layout";
import { getSurveys } from "../core/apiCore";
import Card from "../core/Card";

function SurveyList() {
    const [surveys, setSurveys] = useState([]);
    const [error, setError] = useState(false);

    const loadSurveys = () => {
        getSurveys("createdAt").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setSurveys(data);
            }
        });
    };

    useEffect(() => {
        loadSurveys();
    }, []);

    return (
        <Layout
            title="Encuestas"
            description="Listado de encuestas"
            className="container-fluid"
        >
            <div className="row">
                {/* {JSON.stringify(surveys)} */}
                {surveys.map((survey, i) => (
                    <Card key={i} survey={survey} />
                ))}
            </div>
        </Layout>
    )
}

export default SurveyList
