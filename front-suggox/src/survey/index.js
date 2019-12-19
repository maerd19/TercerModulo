import { API } from "../config";

export const createForm = (userId, token, newForm) => {

    console.log(`userId: ${userId}, token: ${token}, newForm:`, newForm)
    return fetch(`${API}/survey/create/${userId}`, {        
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        // body: JSON.stringify(newForm)
        body: newForm
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}