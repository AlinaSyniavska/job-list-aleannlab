import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

import {baseURL, bearerToken} from "../constants";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = {
        Authorization: `Bearer ${bearerToken}`
    }

    return config;
})

export type Response<T> = Promise<AxiosResponse<T>>;

export {
    axiosService
};