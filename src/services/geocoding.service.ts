import {Response} from "./axios.service";
import {IGeocoding} from "../interfaces";
import {API_GEO_KEY, urls} from "../constants";
import {axiosServiceGeo} from "./axiosGeo.service";

const geocodingService = {

    // https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=9d753ad4bad64cebb9a041c5e335c51b

    getAddress: (lat: number, long: number): Response<IGeocoding> => axiosServiceGeo.get(urls.reverse, {
        params: {
            lat: `${lat}`,
            lon: `${long}`,
            apiKey: API_GEO_KEY,
        }
    }),
}

export {
    geocodingService
}