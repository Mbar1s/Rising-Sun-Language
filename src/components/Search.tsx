import { useEffect, useState } from "react";
import axios from "axios";
import SearchAPI from "../api/SearchAPI";
import DetailsAPI from "../api/DetailsAPI";
import { useLocation, Location } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

interface DisplayType {
  kanji?: {
    character?: string;
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

export default function Search() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState<DisplayType[]>([]);
  const [details, setDetails] = useState<DetailedKanjiType>({
    examples: [],
    kanji: {
      meaning: {},
      kunyomi: {},
      onyomi: {},
      video: {},
    },
  });

  const [exampleNumber, setExampleNumber] = useState(0);
  const [kanjiLocation, setKanjiLocation] = useState<Location | undefined>(
    undefined
  );
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setKanjiLocation(location);
    }
  }, [location]);

  useEffect(() => {
    const getSearch = async () => {
      try {
        const data = await SearchAPI(search);
        setOutput(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSearch();
  }, [search]);

  //Details of searched Kanji
  useEffect(() => {
    const getKanji = async () => {
      try {
        const data = await DetailsAPI(
          kanjiLocation?.state?.input ?? output[0]?.kanji?.character
        );
        setDetails(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getKanji();
  }, [output]);

  const handleInput = (value: any) => {
    setInput(value.target.value);
    console.log(value.target.value);
  };
  const handleSearch = () => {
    setDetails({
      examples: [],
      kanji: {
        meaning: {
          english: "",
        },
        kunyomi: {
          hiragana: "",
          romaji: "",
        },
        onyomi: {
          katakana: "",
          romaji: "",
        },
        video: {
          poster: "",
          mp4: "",
        },
      },
    });
    setKanjiLocation(undefined);
    setExampleNumber(0);
    setSearch(input.toLowerCase());
  };

  console.log(input);
  console.log(search);
  console.log(details);
  console.log(output);
  return (
    <div className="bg-slate-700 text-white">
      <div className="flex  justify-center">
        <input
          onChange={handleInput}
          className="border-2 w-full text-2xl text-center border-slate-600 bg-slate-400 rounded-lg p-2 focus:outline-none"
          type="text"
        />
        <button
          className="border-2 w-1/6 border-slate-600 rounded-lg p-2 hover:bg-slate-600 duration-300"
          onClick={handleSearch}
        >
          Search <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 h-full">
        <section className=" col-span-2 grid grid-cols-2 gap-5 border border-slate-600">
          <div>
            <img src={details.kanji?.video?.poster} className="h-full" alt="" />
          </div>
          <div>
            {details.kanji?.video?.mp4 ? (
              <video
                src={details.kanji?.video?.mp4}
                className="h-full"
                controls
              ></video>
            ) : null}
          </div>
        </section>

        <section className="flex flex-col gap-4 justify-center items-center border border-slate-600">
          <div>Meaning: {details.kanji?.meaning?.english}</div>
          <div className="flex flex-row gap-4">
            <div>Kunyomi romaji: {details.kanji?.kunyomi?.romaji}</div>
            <div>Kunyomi hiragana: {details.kanji?.kunyomi?.hiragana}</div>
          </div>
          <div className="flex flex-row gap-4">
            <div>Onyomi romaji: {details.kanji?.onyomi?.romaji}</div>
            <div>Onyomi katakana: {details.kanji?.onyomi?.katakana}</div>
          </div>
          {details.examples ? (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                Example:
                <h1 className="font-mplus text-xl">
                  {details.examples[exampleNumber]?.japanese}
                </h1>
              </div>
              <div>
                Example meaning:{" "}
                {details.examples[exampleNumber]?.meaning?.english}
              </div>
              <audio
                src={details.examples[exampleNumber]?.audio?.mp3}
                controls
              ></audio>
            </div>
          ) : null}
          <div className="grid grid-cols-2">
            <button
              onClick={() => {
                setExampleNumber(exampleNumber === 0 ? 0 : exampleNumber - 1);
              }}
              className="border border-slate hover:bg-slate-500 duration-300 border-slate-600 p-6"
            >
              <FontAwesomeIcon className="text-3xl" icon={faArrowLeft} />
            </button>
            <button
              onClick={() => {
                setExampleNumber(
                  exampleNumber === details.examples.length - 1
                    ? exampleNumber
                    : exampleNumber + 1
                );
              }}
              className="border border-slate hover:bg-slate-500 duration-300 border-slate-600 p-6"
            >
              <FontAwesomeIcon className="text-3xl" icon={faArrowRight} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
