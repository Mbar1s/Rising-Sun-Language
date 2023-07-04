import { useEffect, useState } from "react";
import AllKanjiAPI from "../api/AllKanjiAPI";
import { Link } from "react-router-dom";
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

export default function AllKanji() {
  const [allKanji, setAllKanji] = useState<DetailedKanjiType[]>([]);

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
  console.log(allKanji);
  return (
    <div className="text-white">
      {allKanji.length !== 0 ? (
        <div className="sm:grid sm:grid-cols-4">
          {allKanji.map((kanji) => (
            <Link
              to={`/Search/${kanji.kanji.character}`}
              state={{ input: kanji.kanji.character }}
            >
              <section className="flex flex-col text-center border hover:bg-slate-600 duration-150">
                <h1 className=" font-mplus text-3xl">{kanji.kanji.character}</h1>
                <p>{kanji.kanji?.meaning?.english}</p>
                <h1>
                  {kanji.kanji?.kunyomi?.romaji}{" "}
                  {kanji.kanji?.kunyomi?.hiragana}
                </h1>
                <h1>
                  {kanji.kanji?.onyomi?.romaji} {kanji.kanji?.onyomi?.katakana}
                </h1>
              </section>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
