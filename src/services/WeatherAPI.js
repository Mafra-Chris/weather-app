import axios from "axios";

const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall'
const KEY = '7cff83efa4a9f7a6338e7e52b9114fbd'

// export default async function getWeather(lat, lon) {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         lat: lat,
//         lon: lon,
//         appid: KEY,
//         exclude: 'minutely,alerts',
//         units: 'metric',
//         lang: 'pt_br'
//       }
//     })
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }

// }