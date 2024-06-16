import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, ABOUT_TEXT_2 } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">
        <span className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 tracking-wider">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 tracking-wider">{ABOUT_TEXT_2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
