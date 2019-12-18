import { API } from "../config";
// import axios from 'axios';

export const createForm = (userId, token, newForm) => {
    return fetch(`${API}/survey/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Since this endpoint needs the authorization token it's necessary to send it
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    // We get the response and process it
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
}

// export const createForm = newForm => {
//     let abc = JSON.parse(localStorage.getItem("jwt"));
//     let userId = abc.user._id;
//     let config = {
//         // timeout: 30000,
//         headers: {'Authorization': "bearer " + abc.token}
//       };

//     const { nombre, comentario } = newForm;

//     return axios
//         .post(`${API}/api/survey/create/${userId}`,newForm, config)
// }