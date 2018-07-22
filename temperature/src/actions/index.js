import axios from 'axios'

const API_KEY = "021dda489d7b3e4c128af13ad3166833"
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// type
export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},TH`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}