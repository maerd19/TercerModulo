import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "../core/showImage";

// We pass a survey in the cardComponent
const Card = ({ survey }) => {
    return (
        <div className="col-4 mb-3">
            <div className="card">
                <div className="card-header">{survey.name}</div>
                <div className="card-body">
                    <ShowImage item={survey} url="survey" />
                    <p>{survey.description}</p>
                    
                    {/* to={{
                  pathname: `/hello/${this.state.nextPage}`, 
                  query:{thing: 'fdsa'}}} > */}

                    <Link to={{
                        pathname: `/answer_survey/${survey._id}`}}>
                        <button className="btn btn-outline-primary mt-2 mb-2">
                            Contestar Encuesta
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;