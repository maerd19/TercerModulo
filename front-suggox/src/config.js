// export const API = process.env.REACT_APP_API_URL;

const isProduction = process.env.NODE_ENV === "production";
export const API = isProduction
  ? "http://orgasmo.herokuapp.com"
  : "http://localhost:3000";