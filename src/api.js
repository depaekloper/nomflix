import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "dce837554c6bf8ed9052feb7e99624dc",
        language: "en-US"
    }
});

export default api;