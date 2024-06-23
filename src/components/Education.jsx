import React from 'react';
import { education } from '../constants';
import EducationCard from '../components/Cards/EducationCard';

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-20 text-center text-4xl font-bold">
        <span className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
          Education
        </span>
      </h1>
      <div className="flex flex-col items-center">
        {education.map((edu, index) => (
          <div key={index} className="flex w-full max-w-3xl relative">
            <div className="absolute top-1/2 -translate-y-1/2 bg-purple-500 w-3 h-3 rounded-full"></div>
            <div className="ml-4 py-2 pl-6 border-l-4 border-purple-500">
              <EducationCard education={edu} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
