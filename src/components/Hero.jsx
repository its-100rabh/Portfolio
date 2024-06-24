import React from "react";
import AnimatedText from "./AnimatedText"; // Import the AnimatedText component
import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/Saurabh.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35 mx-6">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 lg:mt-16 lg:text-7xl font-bold text-6xl bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
              Saurabh Mahapatra
            </h1>
            <span className="text-4xl tracking-tight mx-2 font-bold">
              I am a
            </span>
            <AnimatedText /> {/* Include the AnimatedText component */}
            <p className="my-4 max-w-xl py-6 mx-2 text-m tracking-wider">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center mt-10">
            <img
              src={ProfilePic}
              alt="profile"
              style={{ height: "375px", width: "375px", borderRadius: 60 }}
            />
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
