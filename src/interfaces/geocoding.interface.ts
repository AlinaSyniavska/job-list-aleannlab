export interface IFeatureProperties {
    name: string
    housenumber: string
    street: string
    suburb: string
    district: string
    city: string
    state: string
    postcode: string
    country: string
    country_code: string
    lon: number
    lat: number
    distance: number
    result_type: string
    formatted: string
    address_line1: string
    address_line2: string
    category: string
}

interface IFeature {
    properties: IFeatureProperties
}

export interface IGeocoding {
    features: IFeature[]
}
