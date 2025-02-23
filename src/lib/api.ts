import axios from "axios";

export const api = axios.create({
    baseURL: 'https://aniwatch-api-beta-ten.vercel.app'
})
