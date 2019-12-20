import { API } from "../config";

export const getSurveys = sortBy => {
    return fetch(`${API}/surveys?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};