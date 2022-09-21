import axios from "axios";

const apiDotations = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOTATIONS_API_URL,
});

export default apiDotations;
