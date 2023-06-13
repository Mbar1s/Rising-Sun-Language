import React, { useRef, useState } from "react";
import hiragana from "../data/hiragana.json";
import katakana from "../data/katakana.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";

interface Alphabet {
  kana: string;
  roumaji: string;
  type: string;
}
export default function Alphabet() {
  const [page, setPage] = useState(false);
  const [practice, setPractice] = useState(false);
  const [input, setInput] = useState("");
  const [randomAlphabet, setRandomAlphabet] = useState<Alphabet | null>();
  const [check, setCheck] = useState(false);
  const [streak, setStreak] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePage1 = () => {
    setPage(!page);
    setPractice(false);
    setRandomAlphabet(null);
  };
  const handlePage2 = () => {
    setPage(!page);
    setPractice(true);
    setRandomAlphabet(null);
  };
  const handleNewLetter = () => {
    setCheck(false);
    inputRef.current?.focus();
    if (!practice) {
      setRandomAlphabet(hiragana[Math.floor(Math.random() * 106)]);
    } else {
      setRandomAlphabet(katakana[Math.floor(Math.random() * 106)]);
    }
  };
  const handleInput = (value: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value.target.value);
  };
  const handleCheck = () => {
    if (input === randomAlphabet?.roumaji) {
      setCheck(true);
      if (!check) {
        setStreak(streak + 1);
      } else {
        setStreak(streak);
      }
    } else {
      setCheck(false);
      setStreak(0);
    }
  };

  return (
    <div className=" bg-slate-700 text-white grid grid-cols-2 gap-2 text-2xl">
      {page ? (
        <h1
          onClick={handlePage1}
          className="flex justify-center border-2 border-slate-500 hover:bg-slate-500 bg-slate-600 cursor-pointer"
        >
          Return to Alphabet
        </h1>
      ) : (
        <h1
          onClick={handlePage1}
          className="flex justify-center border-2 hover:bg-slate-500 border-slate-500 bg-slate-600 cursor-pointer"
        >
          Click to practice Hiragana
        </h1>
      )}
      {page ? (
        <h1
          onClick={handlePage2}
          className="flex justify-center border-2 border-slate-500 hover:bg-slate-500 bg-slate-600 cursor-pointer"
        >
          Return to Alphabet
        </h1>
      ) : (
        <h1
          onClick={handlePage2}
          className="flex justify-center border-2 border-slate-500 bg-slate-600  hover:bg-slate-500 cursor-pointer"
        >
          Click to practice Katakana
        </h1>
      )}
      {page ? (
        practice ? (
          <div className="col-span-2 h-screen flex flex-col self-center justify-center items-center gap-10 ">
            <h1 className=" font-mplus text-9xl">
              {randomAlphabet ? randomAlphabet?.kana : "start"}
            </h1>
            <button
              className="p-4 border rounded-lg hover:bg-slate-500"
              onClick={handleNewLetter}
            >
              New Letter <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
            </button>
            <div>
              <input
                ref={inputRef}
                className="bg-slate-500 p-4  rounded-lg focus:outline-none"
                onChange={handleInput}
                type="text"
              />
              <button
                className={`p-4 ${
                  check ? "bg-green-500" : ""
                } border rounded-lg ${
                  check ? "hover:bg-green-500" : "hover:bg-slate-500"
                }`}
                onClick={handleCheck}
              >
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </button>
              <h1 className="mt-10">Current Streak : {streak}</h1>
            </div>
          </div>
        ) : (
          <div className="col-span-2 h-screen flex flex-col self-center justify-center items-center gap-10 ">
            <h1 className=" font-mplus text-9xl">
              {randomAlphabet ? randomAlphabet?.kana : "start"}
            </h1>
            <button
              className="p-4 border rounded-lg hover:bg-slate-500"
              onClick={handleNewLetter}
            >
              New Letter <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
            </button>
            <div>
              <input
                ref={inputRef}
                className="bg-slate-500 p-4  rounded-lg focus:outline-none"
                onChange={handleInput}
                type="text"
              />
              <button
                className={`p-4 ${
                  check ? "bg-green-500" : ""
                } border rounded-lg ${
                  check ? "hover:bg-green-500" : "hover:bg-slate-500"
                }`}
                onClick={handleCheck}
              >
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </button>
              <h1 className="mt-10">Current Streak : {streak}</h1>
            </div>
          </div>
        )
      ) : (
        <>
          <div className="grid grid-cols-5   ">
            {hiragana.map((character) => (
              <div className="border p-4 gap-4 flex justify-center border-slate-500">
                <h1 className=" font-mplus text-3xl">{character.kana}</h1>
                <h1>{character.roumaji}</h1>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5  ">
            {katakana.map((character) => (
              <div className="border p-4 gap-4 flex justify-center border-slate-500 ">
                <h1 className=" font-mplus text-3xl">{character.kana} </h1>
                <h1>{character.roumaji}</h1>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
