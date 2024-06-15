import React from "react";
import AnimatedText from "./AnimatedText"; // Import the AnimatedText component

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mx-6">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 lg:mt-16 lg:text-7xl font-bold text-6xl bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
              Saurabh Mahapatra
            </h1>
            <div className="flex items-center">
              <span className="text-4xl tracking-tight mx-2 font-bold">
                I am a
              </span>
              <AnimatedText /> {/* Include the AnimatedText component */}
            </div>
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
