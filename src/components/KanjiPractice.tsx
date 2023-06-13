import { useEffect, useRef, useState } from "react";
import AllKanjiAPI from "../api/AllKanjiAPI";
import { all } from "axios";

interface Examples {
  audio?: {
    aac?: string;
    mp3?: string;
    ogg?: string;
    opus?: string;
  };
  japanese?: string;
  meaning?: {
    english?: string;
  };
}
interface DetailedKanjiType {
  examples?: Examples[];
  kanji: {
    character?: string;
    meaning?: {
      english?: string;
    };
    kunyomi?: {
      hiragana?: string;
      romaji?: string;
    };
    onyomi?: {
      katakana?: string;
      romaji?: string;
    };
    video?: {
      poster?: string;
      mp4?: string;
    };
  };
}

export default function KanjiPractice() {
  const [allKanji, setAllKanji] = useState<DetailedKanjiType[]>([]);
  const [kanji, setKanji] = useState<DetailedKanjiType>();
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [streak, setStreak] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const getKanji = async () => {
      try {
        const data = await AllKanjiAPI();
        setAllKanji(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getKanji();
  }, []);

  const handleInput = (value:any) => {
    setInput(value.target.value);
  };
  const handleNewKanji = () => {
    setKanji(allKanji[Math.floor(Math.random() * 1234)]);
    inputRef.current?.focus();
    console.log(kanji);
  };
  const handleCheck = () => {
    if (
      kanji?.kanji.meaning?.english
        ?.trim()
        .toLowerCase()
        .split(", ")
        .includes(input.toLowerCase())
    ) {
      setActive(true);
      if (!active) {
        setStreak(streak + 1);
      } else {
        setStreak(streak)
      }
    } else {
      setActive(false);
      setStreak(0);
    }
  };
  console.log(kanji);
  console.log(kanji?.kanji.meaning?.english?.split(","));
  return (
    <div className=" h-screen flex flex-col self-center justify-center items-center gap-10 text-white">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="font-mplus text-9xl">{kanji?.kanji.character ? kanji?.kanji.character : "start"}</h1>
        <button
          className="border border-slate-500 rounded-lg p-5 px-20 hover:bg-slate-600"
          onClick={handleNewKanji}
        >
          New Word
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
            Check
          </button>
        </div>

        <h1 className="mt-10">Current Streak : {streak}</h1>
      </div>
    </div>
  );
}
