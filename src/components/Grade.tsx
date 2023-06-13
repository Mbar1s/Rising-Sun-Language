import { useState, useEffect } from "react";
import axios from "axios";
import DetailsAPI from "../api/DetailsAPI";

interface DisplayType {
  kanji: {
    character: string;
  };
}

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
  examples: Examples[];
  kanji: {
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
export default function Grade() {
  const [grade, setGrade] = useState("1");
  const [display, setDisplay] = useState<DisplayType[]>([]);
  const [detailedKanji, setDetailedKanji] = useState<DetailedKanjiType>({
    examples: [],
    kanji: {
      meaning: {},
    },
  });
  const [videoUrl, setVideoUrl] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [exampleNumber, setExampleNumber] = useState(0);
  console.log(detailedKanji);

  //GET KANJI BY GRADE
  const kanjiByGrade = {
    method: "GET",
    url: "https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/",
    params: { grade: `${grade}` },
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_REACT_RAPID_API}`,
      "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(kanjiByGrade)
      .then(function (response) {
        console.log(response.data);
        setDisplay(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [grade]);

  //GET DETAILS ABOUT KANJI

  useEffect(() => {
    const getKanji = async () => {
      try {
        const data = await DetailsAPI(display[pageNumber]?.kanji.character);
        setDetailedKanji(data.data);
        setVideoUrl(data?.data.kanji?.video?.mp4);
      } catch (error) {
        console.log(error);
      }
    };
    getKanji();
  }, [display, pageNumber]);

  const handleGrade = (value: any) => {
    setGrade(value.target.value);
  };

  return (
    <div className="grow">
      <ul className=" flex flex-row items-center justify-center text-white bg-slate-800 ">
        <li>
          <button
            className="border border-slate-700 hover:bg-slate-700 p-4 px-12"
            onClick={handleGrade}
            value={1}
          >
            Grade 1
          </button>
        </li>
        <li>
          <button
            className="border border-slate-700 hover:bg-slate-700 p-4 px-12"
            onClick={handleGrade}
            value={2}
          >
            Grade 2
          </button>
        </li>
        <li>
          <button
            className="border border-slate-700 hover:bg-slate-700 p-4 px-12"
            onClick={handleGrade}
            value={3}
          >
            Grade 3
          </button>
        </li>
        <li>
          <button
            className="border border-slate-700 hover:bg-slate-700 p-4 px-12"
            onClick={handleGrade}
            value={4}
          >
            Grade 4
          </button>
        </li>
        <li>
          <button
            className="border border-slate-700 hover:bg-slate-700 p-4 px-12"
            onClick={handleGrade}
            value={5}
          >
            Grade 5
          </button>
        </li>
        <li>
          <button
            className="border border-slate-700 hover:bg-slate-700 p-4 px-12"
            onClick={handleGrade}
            value={6}
          >
            Grade 6
          </button>
        </li>
      </ul>
      <div className="grow h-screen md:grid md:grid-cols-3 flex flex-col bg-slate-700 text-white grid-rows-3 ">
        <div className=" col-span-2 row-span-3 flex justify-center items-center text-6xl border border-slate-600">
          <section className="flex flex-row gap-10">
            <div>
              <img
                src={detailedKanji.kanji?.video?.poster}
                className="h-full"
                alt=""
              />
            </div>
            <div>
              {videoUrl ? (
                <video
                  src={videoUrl}
                  className="h-96 bg-slate-500"
                  controls
                ></video>
              ) : null}
            </div>
          </section>
        </div>
        <div className="col-span-1 row-span-2 flex justify-center items-center border border-slate-600">
          <section className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl">
              Meaning: {detailedKanji.kanji?.meaning?.english}
            </h1>
            <div className="flex flex-row gap-4">
              <div>Kunyomi romaji: {detailedKanji.kanji?.kunyomi?.romaji}</div>
              <div>
                Kunyomi hiragana: {detailedKanji.kanji?.kunyomi?.hiragana}
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div>Onyomi romaji: {detailedKanji.kanji?.onyomi?.romaji}</div>
              <div>
                Onyomi katakana: {detailedKanji.kanji?.onyomi?.katakana}
              </div>
            </div>
            {detailedKanji.examples ? (
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <h1>Example:</h1>
                  <h1 className="font-mplus">{detailedKanji.examples[exampleNumber]?.japanese}</h1>
                </div>
                <div>
                  Example meaning:{" "}
                  {detailedKanji.examples[exampleNumber]?.meaning?.english}
                </div>
              </div>
            ) : null}

            {detailedKanji.examples ? (
              <audio
                src={detailedKanji.examples[exampleNumber]?.audio?.mp3}
                controls
              ></audio>
            ) : null}
            <div className="grid grid-cols-2">
              <button
                onClick={() => {
                  setExampleNumber(
                    exampleNumber === detailedKanji.examples.length - 1
                      ? exampleNumber
                      : exampleNumber + 1
                  );
                }}
                className="border border-slate hover:bg-slate-500 duration-300 border-slate-600 p-5"
              >
                Next Example
              </button>
              <button
                onClick={() => {
                  setExampleNumber(exampleNumber === 0 ? 0 : exampleNumber - 1);
                }}
                className="border border-slate hover:bg-slate-500 duration-300 border-slate-600 p-5"
              >
                Previous Example
              </button>
            </div>
          </section>
        </div>
        <div className="grid grid-cols-2 text-3xl">
          <button
            className=" border border-slate-600 hover:bg-slate-500 duration-300"
            onClick={() => {
              setPageNumber(pageNumber + 1);
              setExampleNumber(0);
            }}
          >
            Next
          </button>
          <button
            className=" border border-slate-600 hover:bg-slate-500 duration-300"
            onClick={() => {
              if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
                setExampleNumber(0);
              }
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
