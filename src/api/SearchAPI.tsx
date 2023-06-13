
import axios from "axios";

export default function SearchAPI(search) {
  const options = {
    method: 'GET',
    url: 'https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/',
    params: {kem: `${search}`},
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_REACT_RAPID_API}`,
      'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
    }
  };
  

  console.log(search)
  const response = axios.request(options)
    

  return response;
}
