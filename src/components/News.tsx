import React, { useEffect, useState } from "react";
import axios from "axios";
interface News {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  source?: {
    id?: string;
    name?: string;
  };
  title?: string;
  url?: string;
}
export default function News() {
  const [newsAPI, setNewsAPI] = useState<News[]>();

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${
          import.meta.env.VITE_REACT_NEWS_API
        }`
      )
      .then(function (response) {
        setNewsAPI(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(newsAPI);

  return (
    <div>
      {newsAPI?.map((item) => (
        <div className="flex flex-col justify-center items-center p-4 border border-slate-600 gap-4 text-white">
          <div className="flex flex-col justify-center items-center">
            <p className="font-mplus text-2xl"> {item.title}</p>
            <h1 className="">{item.author}</h1>
            <a className=" text-cyan-600" href={item.url}>
              Visit the website to read more and practice Japanese!
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
