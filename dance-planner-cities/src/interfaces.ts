export interface ICityWithGeo {
    name: string;
    lat: number;
    lon: number;
}

export interface ICountryAndCities {
    countryName: string
    countryCode: string
    cities: string[] | ICityWithGeo[]
}