import { useState, useEffect } from "react";
import axios from "axios";

export default function DetailsAPI(kanji: string) {
  const options = {
    method: "GET",
    url: `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`,
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_REACT_RAPID_API}`,
      "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
    },
  };

  const response = axios.request(options);

  return response;
}
