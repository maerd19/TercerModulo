import { API } from "../config";

export const createAnswer = (userId, token, product) => {
    return fetch(`${API}/answer/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getSurveyById = surveyId => {
    return fetch(`${API}/survey/${surveyId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}
