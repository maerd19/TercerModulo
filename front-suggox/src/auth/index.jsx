import { API } from "../config";

// As parameter we receive an object
export const signup = user => {
    // To send data to the backend fetch can be used
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    // When the fetch is make we will either get a successful response or an error to handle

        // Sucessful response
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

// Store data in localStorage
export const authenticate = (data, next) => {
    // if we have access to the windows object
    if (typeof window !== "undefined") {
        // name of field, value of field
        localStorage.setItem("jwt", JSON.stringify(data));
        // This will be a callback function
        next();
    }
};

// This function will take a callback that will be used to update the state and redirect the user
export const signout = next => {
    if (typeof window !== "undefined") {
        // remove jwt from localStorage 
        localStorage.removeItem("jwt");
        next();
        // request to back end to log out the user
        return fetch(`${API}/signout`, {
            method: "GET"
        })
            .then(response => {
                console.log("signout", response);
            })
            .catch(err => console.log(err));
    }
};

// Validate if user is authenticated
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
};
