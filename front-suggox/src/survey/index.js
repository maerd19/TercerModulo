import { API } from "../config";

export const createForm = (userId, token, newForm) => {

    console.log(`test para ver si imprime API: ${API}/survey/create/${userId}`);
    console.log(`Esto es un token ${token}`);
    

    return fetch(`${API}/survey/create/${userId}`, {        
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newForm)
    })
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