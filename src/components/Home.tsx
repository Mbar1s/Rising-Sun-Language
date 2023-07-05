import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faLanguage,
  faSchool,
  faMagnifyingGlass,
  faDiceD20,
  faPencil,
  faUserGraduate,
  faEye,
  faSearch,
  faArrowDownAZ,
  faSpellCheck,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-10 h-full mt-10 items-center justify-center bg-slate-700 text-white">
        <h1 className="text-3xl">Welcome</h1>
        <h1>Navigate To The Section You Want</h1>
        <div className=" sm:grid sm:grid-cols-3 ">
          <div className="grid grid-cols-2">
            <Link
              className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/Grade"
            >
              <button className="">
                See Kanji By Grade{" "}
                <FontAwesomeIcon
                  className="inline-block group-hover:hidden sm:hidden"
                  icon={faSchool}
                />
                <FontAwesomeIcon
                  className=" hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                  icon={faSchool}
                  beatFade
                />
              </button>
            </Link>
            <Link
              className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/Search"
            >
              <button className="">
                Search For Kanji{" "}
                <FontAwesomeIcon
                  className="inline-block group-hover:hidden sm:hidden"
                  icon={faSearch}
                />
                <FontAwesomeIcon
                  className=" hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                  icon={faSearch}
                  beatFade
                />
              </button>
            </Link>
            <Link
              className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/Draw"
            >
              <button className="">
                Draw Kanji{" "}
                <FontAwesomeIcon
                  className="inline-block group-hover:hidden sm:hidden"
                  icon={faPencil}
                />
                <FontAwesomeIcon
                  className=" hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                  icon={faPencil}
                  beatFade
                />
              </button>
            </Link>
            <Link
              className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/KanjiPractice"
            >
              <button className="">
                Practice Kanji{" "}
                <FontAwesomeIcon
                  className="inline-block group-hover:hidden sm:hidden"
                  icon={faUserGraduate}
                />
                <FontAwesomeIcon
                  className=" hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                  icon={faUserGraduate}
                  beatFade
                />
              </button>
            </Link>
            <Link
              className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center col-span-2"
              to="/AllKanji"
            >
              <button className="">
                All Kanji
                <FontAwesomeIcon
                  className="ml-2 inline-block group-hover:hidden sm:hidden"
                  icon={faEye}
                />
                <FontAwesomeIcon
                  className=" ml-2 hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                  icon={faEye}
                  beatFade
                />
              </button>
            </Link>
          </div>
          <Link
            className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/Alphabet"
          >
            <button className="">
              Japanese Alphabet{" "}
              <FontAwesomeIcon
                className="inline-block group-hover:hidden sm:hidden"
                icon={faArrowDownAZ}
              />
              <FontAwesomeIcon
                className=" hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                icon={faArrowDownAZ}
                beatFade
              />
            </button>
          </Link>
          <Link
            className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/Vocabulary"
          >
            <button className="">
              Japanese Vocabulary{" "}
              <FontAwesomeIcon
                className="inline-block group-hover:hidden sm:hidden"
                icon={faBook}
              />
              <FontAwesomeIcon
                className=" hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                icon={faBook}
                beatFade
              />
            </button>
          </Link>
          <div className="grid grid-cols-2">
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/Basic"
            >
              <button className="">Basic Grammar Rules</button>
            </Link>
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/VerbTenses"
            >
              <button className=""> Verb Tenses</button>
            </Link>
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/SentenceStructures"
            >
              <button className=""> Sentence Structures</button>
            </Link>
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
              to="/Particles"
            >
              <button className="">Particles</button>
            </Link>
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center col-span-2"
              to="/Miscellaneous"
            >
              <button className="">Miscellaneous grammar</button>
            </Link>
          </div>

          <Link
            className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/Translate"
          >
            <button className="">
              Translate{""}
              <FontAwesomeIcon
                className=" ml-2 inline-block group-hover:hidden sm:hidden"
                icon={faLanguage}
              />
              <FontAwesomeIcon
                className=" ml-2  hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                icon={faLanguage}
                beatFade
              />
            </button>
          </Link>
          <Link
            className="group flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/News"
          >
            <button className="">
              Japanese News{""}
              <FontAwesomeIcon
                className=" ml-2 inline-block group-hover:hidden sm:hidden"
                icon={faNewspaper}
              />
              <FontAwesomeIcon
                className=" ml-2  hidden group-hover:inline-block sm:group-hover:hidden sm:hidden"
                icon={faNewspaper}
                beatFade
              />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
