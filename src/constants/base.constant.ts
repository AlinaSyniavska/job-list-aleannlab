const baseURL = process.env.REACT_APP_API;
const bearerToken = process.env.REACT_APP_BEARER_TOKEN;

const API_KEY = process.env.REACT_APP_API_KEY;

const baseUrlGeo = process.env.REACT_APP_API_GEO;
const API_GEO_KEY = process.env.REACT_APP_API_GEO_KEY;

const urls = {
    data: 'data',
    reverse: 'reverse',
}

export {
    API_GEO_KEY,
    API_KEY,
    baseUrlGeo,
    baseURL,
    bearerToken,
    urls,
}

