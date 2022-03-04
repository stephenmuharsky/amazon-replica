import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-57593.cloudfunctions.net/api",
  //api url
});

export default instance;
