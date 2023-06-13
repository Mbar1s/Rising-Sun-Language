import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faLanguage,
  faSchool,
  faMagnifyingGlass,
  faDiceD20,
  faPencil,
  faUserGraduate,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <ul className="flex flex-col sm:grid sm:grid-cols-7 justify-center border-b-2 border-slate-700 bg-slate-800 text-white ">
        <li className=" flex-grow hover:bg-slate-700 duration-150">
          <Link className="flex" to="/">
            <button className="flex-grow border-l-2 p-4  border-slate-700 ">
              Rising Sun Language <FontAwesomeIcon icon={faDiceD20} />
            </button>
          </Link>
        </li>
        <ul className="group  flex-grow ">
          <li className=" hidden sm:flex border-l-2 p-4 text-center justify-center  border-slate-700 hover:bg-slate-700 duration-150">
            Kanji
          </li>
          <ul className="sm:absolute sm:hidden group-hover:flex flex-col sm:bg-slate-800  ">
            <li className="border-b hover:bg-slate-600">
              <Link className="flex justify-center" to="/Grade">
                <button className="p-5 px-6 z-20 ">
                  See Kanji By Grade{" "}
                  <FontAwesomeIcon className="text-xl" icon={faUserGraduate} />
                </button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600">
              <Link className="flex justify-center" to="/Search">
                <button className="p-5 px-6 z-20 ">
                  Search Kanji{" "}
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faMagnifyingGlass}
                  />
                </button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600">
              <Link className="flex justify-center" to="/Draw">
                <button className="p-5 px-6 z-20 ">
                  Draw Kanji{" "}
                  <FontAwesomeIcon className="text-xl" icon={faPencil} />
                </button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600">
              <Link className="flex justify-center" to="/AllKanji">
                <button className="p-5 px-6 z-20 ">
                  All Kanji <FontAwesomeIcon className="text-xl" icon={faEye} />
                </button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600">
              <Link className="flex justify-center" to="/KanjiPractice">
                <button className="p-5 px-6 z-20 ">
                  Practice Kanji{" "}
                  <FontAwesomeIcon className="text-xl" icon={faSchool} />
                </button>
              </Link>
            </li>
          </ul>
        </ul>
        <li className=" flex-grow">
          <Link className="flex" to="/Alphabet">
            <button className="flex-grow border-l-2 p-4  border-slate-700 hover:bg-slate-700 duration-150">
              Alphabet
            </button>
          </Link>
        </li>
        <li className=" flex-grow">
          <Link className="flex" to="/Vocabulary">
            <button className="flex-grow border-l-2 p-4  border-slate-700 hover:bg-slate-700 duration-150">
              Vocabulary
            </button>
          </Link>
        </li>
        <ul className="group flex-grow">
          <li className=" hidden sm:flex flex-grow border-l-2 p-4 text-center justify-center border-slate-700 hover:bg-slate-700 duration-150">
            Grammar
          </li>
          <ul className="sm:absolute sm:hidden group-hover:flex flex-col sm:bg-slate-800">
            <li className="border-b hover:bg-slate-600 ">
              <Link className="flex justify-center" to="/Basic">
                <button className="p-5 px-9 z-20">Basic Rules</button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600 ">
              {" "}
              <Link className="flex justify-center" to="/VerbTenses">
                <button className="p-5 px-9 z-20">Verb Tenses</button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600 ">
              {" "}
              <Link className="flex justify-center" to="/SentenceStructures">
                <button className="p-5 px-9 z-20">Sentence Structures</button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600 ">
              {" "}
              <Link className="flex justify-center" to="/Particles">
                <button className="p-5 px-9 z-20">Particles</button>
              </Link>
            </li>
            <li className="border-b hover:bg-slate-600 ">
              {" "}
              <Link className="flex justify-center" to="/Miscellaneous">
                <button className="p-5 px-9 z-20">Miscellaneous</button>
              </Link>
            </li>
          </ul>
        </ul>
        <li className=" flex-grow">
          <Link className="flex" to="/Translate">
            <button className="flex-grow border-l-2 p-4  border-slate-700 hover:bg-slate-700 duration-150">
              Translate <FontAwesomeIcon icon={faLanguage} />
            </button>
          </Link>
        </li>
        <li className=" flex-grow">
          <Link className="flex" to="/News">
            <button className="flex-grow border-l-2 border-r-2 p-4  border-slate-700 hover:bg-slate-700 duration-150">
              News <FontAwesomeIcon icon={faNewspaper} />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
