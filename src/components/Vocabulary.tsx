import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPlay,
  faSchool,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import vocabulary from "../data/vocabulary.json";

interface Vocab {
  japanese: string;
  english: string;
  pronunciation: string;
}

export default function Vocabulary() {
  const [page, setPage] = useState(true);
  const [vocab, setVocab] = useState<Vocab>();
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [streak, setStreak] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (value) => {
    setInput(value.target.value.toLowerCase());
    setActive(false);
  };
  const handleNewVocab = () => {
    setVocab(vocabulary.vocabulary[Math.floor(Math.random() * 278)]);
    setActive(false);
    setInput("");
    inputRef.current?.focus();
  };

  const handleCheck = () => {
    if (input === vocab?.english.toLowerCase()) {
      setActive(true);
      if (!active) {
        setStreak(streak + 1);
      } else {
        setStreak(streak);
      }
    } else {
      setActive(false);
      setStreak(0);
    }
  };
  const handlePage = () => {
    setPage(!page);
  };
  return (
    <div className="grid grid-cols-4 bg-slate-700 text-white h-screen">
      <button
        className="border rounded-lg hover:bg-slate-500"
        onClick={handlePage}
      >
        {page ? (
          <div>
            Practice <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>
          </div>
        ) : (
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faArrowLeft}
            ></FontAwesomeIcon> <br></br> Go back to Vocabulary
          </div>
        )}
      </button>
      {page ? (
        <>
          {vocabulary.vocabulary.map((item) => (
            <div className="flex flex-col justify-center items-center p-4 border border-slate-600 gap-4">
              <h1 className="text-3xl">{item.japanese}</h1>
              <div className="flex flex-col justify-center items-center">
                <p> {item.pronunciation}</p>
                <p> {item.english}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className=" col-span-3 justify-center items-center self-center text-white">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className=" font-mplus text-5xl">
              {vocab?.japanese ? vocab?.japanese : "Click the button"}
            </h1>
            <h1 className="text-3xl">
              {vocab?.pronunciation ? vocab?.pronunciation : "for new Word"}
            </h1>
            <button
              className="border border-slate-500 rounded-lg p-5 px-20 hover:bg-slate-600"
              onClick={handleNewVocab}
            >
              New Word <FontAwesomeIcon icon={faPlay} />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-10">
            <div>
              <input
                className="bg-slate-500 p-5  rounded-lg focus:outline-none"
                onChange={handleInput}
                type="text"
                ref={inputRef}
              />
              <button
                className={`${
                  active ? "bg-green-500" : ""
                } border border-slate-500 rounded-lg p-5 ${
                  active ? "bg-green-500" : "hover:bg-slate-600"
                }`}
                onClick={handleCheck}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>

            <h1 className="mt-10">Current Streak : {streak}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
