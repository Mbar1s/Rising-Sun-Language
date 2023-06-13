import { useState, useEffect } from "react";
import translateAPI from "../api/translateAPI";
import TextToSpeechAPI from "../api/TextToSpeechAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

interface Search {
  input: string;
  targetLanguage: string;
  sourceLanguage: string;
}

export default function Translate() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState<Search[]>([]);
  const [output, setOutput] = useState("");
  const [speech, setSpeech] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("ja");

  const handleInput = (value:any) => {
    setInput(value.target.value);
    
  };
  const handleSearch = () => {
    setSearch([input, targetLanguage, sourceLanguage]);
    setSpeech("")
  };
  const handleLanguage = () => {
    if (targetLanguage === "en") {
      setTargetLanguage("ja");
      setSourceLanguage("en");
    } else {
      setTargetLanguage("en");
      setSourceLanguage("ja");
    }
  };
  //Translate API
  useEffect(() => {
    const getKanji = async () => {
      try {
        const data = await translateAPI(search);
        console.log(data);
        setOutput(data.data.data.translatedText);
      } catch (error) {
        console.log(error);
      }
    };
    getKanji();
  }, [search]);

  //Text-to-Speech API
  useEffect(() => {
    const getKanji = async () => {
      try {
        const data = await TextToSpeechAPI([output, targetLanguage]);
        console.log(data);
        setSpeech(data.data.speech);
      } catch (error) {
        console.log(error);
      }
    };
    getKanji();
  }, [output]);
  console.log(input);
  console.log(search);
  console.log(output);
  console.log(speech);

  return (
    <div className="grid grid-cols-2 h-screen justify-center  text-white">
      <div className="flex flex-col">
        <textarea
          onChange={handleInput}
          className="border-2 sm: text-2xl h-full  border-slate-600 bg-slate-400 rounded-lg p-2 focus:outline-none"
        ></textarea>
        <div className="flex flex-row">
          <button
            className="border-2 w-full  h-48 border-slate-600 rounded-lg p-3 hover:bg-slate-600 duration-300"
            onClick={handleSearch}
          >
            Search <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
          <button
            className="border-2 w-full h-48  border-slate-600 rounded-lg p-3 hover:bg-slate-600 duration-300"
            onClick={handleLanguage}
          >
            Source Language ={" "}
            {targetLanguage === "ja"
              ? sourceLanguage + "glish"
              : sourceLanguage + "panese"}
          </button>
        </div>
      </div>
      <div className="sm:text-5xl flex flex-col gap-10 items-center  self-center text-center  ">
        {" "}
        <h1 className="font-mplus">{output}</h1>
        <audio className=""
          src={speech}
          controls
        ></audio>
      </div>
    </div>
  );
}
