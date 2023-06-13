import React from "react";
import axios from "axios";
export default function translateAPI(output) {
    const options = {
        method: 'POST',
        url: 'https://text-to-speech53.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': `${import.meta.env.VITE_REACT_RAPID_API}`,
          'X-RapidAPI-Host': 'text-to-speech53.p.rapidapi.com'
        },
        data: {
          text: `${output[0]}`,
          lang: `${output[1]}`,
          format: 'wav'
        }
      };
    

  const response = axios.request(options);

  return response;
}
