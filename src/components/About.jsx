import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, ABOUT_TEXT_2 } from "../constants";
import { Button } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";

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
          <div className="flex mx-60 my-5">
            <Button
              variant="contained"
              href="https://drive.google.com/file/d/14j4mcW4UKebS9w4BE8rTa0rLT0pBFpFY/view?usp=sharing"
              startIcon={<ReceiptIcon />}
              sx={{
                background:
                  "linear-gradient(to right, #fcb6c8, #cbd5e1, #a5b4fc)",
                color: "black",
                fontWeight: "bold",
                fontFamily: "inherit",
                fontSize: 18,
                borderRadius: 2,
              }}
            >
              My Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
