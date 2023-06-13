import React from "react";
import grammar from "../data/grammar.json";

export default function Basic() {
  return (
    <div className="text-white">
      <h1 className=" text-3xl pb-4 text-center">Basic</h1>
      <section className="grid grid-cols-2 gap-10">
        {grammar.basic.map((rule) => (
          <div className=" text-center border border-slate-500 p-10">
            <h1 className="text-2xl">{rule.name}</h1>
            <p className=" text-lg">{rule.explanation}</p>
            <p className=" text-xl">{rule.example}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
