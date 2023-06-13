import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-10 h-full mt-10 items-center justify-center bg-slate-700 text-white">
        <h1 className="text-3xl">Welcome</h1>
        <h1>Navigate To The Section You Want</h1>
        <div className="sm:grid sm:grid-cols-3 ">
          <div className="grid grid-cols-2">
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10"
              to="/Grade"
            >
              <button className="">See Kanji By Grade</button>
            </Link>
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10"
              to="/Search"
            >
              <button className="">Search For Kanji</button>
            </Link>
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10"
              to="/Draw"
            >
              <button className="">Draw Kanji</button>
            </Link>
            <Link
              className="flex border border-slate-500 hover:bg-slate-500 p-10"
              to="/KanjiPractice"
            >
              <button className="">Practice Kanji</button>
            </Link>
          </div>
          <Link
            className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/Alphabet"
          >
            <button className="">Japanese Alphabet</button>
          </Link>
          <Link
            className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/Vocabulary"
          >
            <button className="">Japanese Vocabulary</button>
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
          </div>

          <Link
            className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/Translate"
          >
            <button className="">Translate</button>
          </Link>
          <Link
            className="flex border border-slate-500 hover:bg-slate-500 p-10 justify-center"
            to="/News"
          >
            <button className="">Japanese News</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
