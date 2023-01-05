export * from "./interfaces";
import Axios from "axios";

export const Api = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});
