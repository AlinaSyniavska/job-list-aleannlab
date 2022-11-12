import axios from "axios";

import {baseUrlGeo} from "../constants";

const axiosServiceGeo = axios.create({baseURL: baseUrlGeo});

export {
    axiosServiceGeo
};