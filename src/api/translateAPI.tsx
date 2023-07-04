import React from "react";
import axios from "axios";

interface translateApiProps {
  input: string;
  targetLanguage: string;
  sourceLanguage: string;
}
export default function translateAPI(search: translateApiProps[]) {
  const encodedParams = new URLSearchParams();
  encodedParams.set("source_language", `${search[0].sourceLanguage}`);
  encodedParams.set("target_language", `${search[0].targetLanguage}`);
  encodedParams.set("text", `${search[0].input}`);

  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": `${import.meta.env.VITE_REACT_RAPID_API}`,
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const response = axios.request(options);

  return response;
}
