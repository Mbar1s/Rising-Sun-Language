import { all } from "axios";
import { useState, useEffect } from "react";
import AllKanjiAPI from "../api/AllKanjiAPI";
import DrawingCanvas from "./Canvas";

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
export default function Draw() {
  const [allKanji, setAllKanji] = useState<DetailedKanjiType[]>([]);
  const [singleKanji, setSingleKanji] = useState<DetailedKanjiType>({
    kanji: {
      meaning: {},
    },
  });

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

  const handleKanji = () => {
    setSingleKanji(allKanji[Math.floor(Math.random() * allKanji.length)]);
  };
  console.log(allKanji);
  console.log(allKanji[Math.floor(Math.random() * allKanji.length)]);
  console.log(singleKanji);

  return (
    <div className="">
      <div className=" flex flex-col bg-slate-700 text-white">
        {allKanji.length !== 0 ? (
          <button
            className=" col-span-2 z-10 p-4 bg-slate-800 hover:bg-slate-700"
            onClick={handleKanji}
          >
            Get Kanji
          </button>
        ) : (
          <p className="flex col-span-2 items-center justify-center z-10 p-4 bg-slate-800">
            Loading
          </p>
        )}
        {allKanji.length !== 0 ? (
          <div className="grid grid-cols-2">
            <div className="border border-slate-500 flex flex-col">
              <h1 className="font-mplus flex justify-center text-3xl">
                {singleKanji?.kanji.character}
              </h1>
              <div className="flex justify-center text-xl gap-2">
                <p>Meaning: {singleKanji?.kanji.meaning?.english} </p>
                <p> Kunyomi Romaji: {singleKanji?.kanji?.kunyomi?.romaji}</p>
                <p> Onyomi Romaji: {singleKanji?.kanji?.onyomi?.romaji}</p>
              </div>
              {singleKanji.kanji?.video?.mp4 ? (
                <video
                  src={singleKanji.kanji?.video?.mp4}
                  className=""
                  controls
                  autoPlay
                ></video>
              ) : null}
            </div>
            <div className="border border-slate-500">
              <DrawingCanvas />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
