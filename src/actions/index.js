import axios from 'axios'

const API_KEY = "44b43a7daf2a331e423680e0bcd9021e";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},pe`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}