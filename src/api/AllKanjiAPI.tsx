import axios from "axios";

export default function AllKanjiAPI() {
  const options = {
    method: "GET",
    url: "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all",
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_REACT_RAPID_API}`,
      "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
    },
  };

  const response = axios.request(options);

  return response;
}
