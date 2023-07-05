import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faLanguage,
  faSchool,
  faMagnifyingGlass,
  faDiceD20,
  faPencil,
  faUserGraduate,
  faEye,
  faSquareCaretDown,
  faArrowDownAZ,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="">
      <ul className="hidden sm:grid sm:grid-cols-7 justify-center border-b-2 border-slate-700 bg-slate-900 text-white ">
        <li className=" flex-grow hover:bg-slate-700 duration-150">
          <Link className="flex" to="/">
            <button className="flex-grow border-l-2 p-4  border-slate-700 ">
              Rising Sun Language <FontAwesomeIcon icon={faDiceD20} />
            </button>
          </Link>
        </li>
        <ul className="group w-full relative flex-grow ">
          <li className=" flex group-active:hidden group-hover:hidden border-l-2 p-4 text-center justify-center  border-slate-700 hover:bg-slate-700 duration-150">
            Kanji
          </li>
          <ul className=" hidden absolute sm:hidden group-hover:flex flex-col sm:bg-slate-800 w-full ">
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
        <ul className="group relative flex-grow">
          <li className=" group-hover:hidden flex-grow border-l-2 p-4 text-center justify-center border-slate-700 hover:bg-slate-700 duration-150">
            Grammar
          </li>
          <ul className="hidden sm:absolute group-hover:flex flex-col w-full sm:bg-slate-800">
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
      <div className="sm:hidden flex text-white justify-between  bg-slate-800">
        <Link className="flex" to="/">
          <button className="flex-grow group border-l-2 p-4  border-slate-700 ">
            Rising Sun Language{" "}
            <FontAwesomeIcon
              className="inline-block group-hover:hidden sm:hidden"
              icon={faDiceD20}
            />
            <FontAwesomeIcon
              className=" hidden group-hover:inline-block sm:hidden"
              icon={faDiceD20}
              beatFade
            />
          </button>
        </Link>

        <Menu as="div" className="relative inline-block text-left">
          <div className="">
            <Menu.Button className="group inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-700 px-5 py-3 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-slate-800">
              <FontAwesomeIcon
                className="inline-block group-hover:hidden sm:hidden"
                icon={faSquareCaretDown}
                size="2xl"
              />
              <FontAwesomeIcon
                className="hidden group-hover:inline-block sm:hidden"
                icon={faSquareCaretDown}
                rotation={180}
                size="2xl"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <Link className="flex" to="/AllKanji">
                    <button className="flex-grow  group border-l-2 p-4  border-slate-700 ">
                      All Kanji
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faEye}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faEye}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Search">
                    <button className="flex-grow  group border-l-2 p-4  border-slate-700 ">
                      Search Kanji
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faMagnifyingGlass}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faMagnifyingGlass}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Grade">
                    <button className="flex-grow  group border-l-2 p-4  border-slate-700 ">
                      Kanji by Difficulty
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faUserGraduate}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faUserGraduate}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Draw">
                    <button className="flex-grow  group border-l-2 p-4  border-slate-700 ">
                      Draw Kanji
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faPencil}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faPencil}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/KanjiPractice">
                    <button className="flex-grow border-b-2   group border-l-2 p-4  border-slate-700 ">
                      Practice Kanji
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faSchool}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faSchool}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Alphabet">
                    <button className="flex-grow  group border-l-2 p-4  border-slate-700 ">
                      Alphabet
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faArrowDownAZ}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faArrowDownAZ}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Vocabulary">
                    <button className="flex-grow border-b-2   group border-l-2 p-4  border-slate-700 ">
                      Vocabulary
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faBook}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faBook}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Translate">
                    <button className="flex-grow  group border-l-2 p-4  border-slate-700 ">
                      Translate
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faLanguage}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faLanguage}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/News">
                    <button className="flex-grow border-b-2  group border-l-2 p-4  border-slate-700 ">
                      Japanese News
                      <FontAwesomeIcon
                        className="inline-block group-hover:hidden sm:hidden ml-2"
                        icon={faNewspaper}
                      />
                      <FontAwesomeIcon
                        className=" hidden group-hover:inline-block sm:hidden ml-2"
                        icon={faNewspaper}
                        beatFade
                      />
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Basic">
                    <button className="flex-grow   group border-l-2 p-4  border-slate-700 ">
                      Basic Grammar
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Particles">
                    <button className="flex-grow   group border-l-2 p-4  border-slate-700 ">
                      Particles
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/VerbTenses">
                    <button className="flex-grow   group border-l-2 p-4  border-slate-700 ">
                      Verb Tenses
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/SentenceStructures">
                    <button className="flex-grow   group border-l-2 p-4  border-slate-700 ">
                      Sentence Structures
                    </button>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="flex" to="/Miscellaneous">
                    <button className="flex-grow   group border-l-2 p-4  border-slate-700 ">
                      Miscellaneous
                    </button>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
