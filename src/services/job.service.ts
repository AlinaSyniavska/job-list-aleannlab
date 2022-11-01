import {axiosService, Response} from "./axios.service";
import {IJob} from "../interfaces";
import {urls} from "../constants";

const jobService = {
    getAll: (): Response<IJob[]> => axiosService.get(urls.data),
}

export {
    jobService
}