import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="mt-20 text-center text-4xl font-bold">
        <span className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full">
          <p className="my-10 max-w-xl tracking-wider text-center mx-auto text-m">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-xl p-4 m-4 border  rounded-2xl"
              style={{
                backgroundColor: "#140d01",
                borderColor: "#f9a8d4",
                borderWidth: 3,
              }}
            >
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                {skill.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center p-2 border border-gray-400 rounded-lg"
                  >
                    <img
                      className="w-6 h-6 mr-2"
                      src={item.image}
                      alt={item.name}
                    />
                    <span className="text-white">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
