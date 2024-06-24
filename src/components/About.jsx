import React from "react";
import { ABOUT_TEXT, ABOUT_TEXT_2 } from "../constants";
import { Button } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { styled } from "@mui/system";

const About = () => {
  const ButtonContainer = styled("div")`
    width: 95%;
    max-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
  `;
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">
        <span className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src="https://i.insider.com/601441dd6dfbe10018e00c25?width=700"
              alt="about"
              style={{ height: 350, width: 450 }}
            />
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
        <div className="w-full">
          <p className="mt-20 max-w-xl tracking-wider text-center mx-auto text-lg font-medium">
            For further details, please take a moment to review my resume.
          </p>
          <div className="flex mx-auto justify-center mt-10 mb-10">
            <ButtonContainer>
              <Button
                variant="contained"
                href="https://drive.google.com/file/d/14j4mcW4UKebS9w4BE8rTa0rLT0pBFpFY/view?usp=sharing"
                startIcon={<ReceiptIcon />}
                sx={{
                  background:
                    "linear-gradient(225deg, #140d01 0%, #2d1a07 100%)",
                  color: "white",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  fontSize: 20,
                  borderRadius: "20px",
                  padding: "12px 0",
                  textDecoration: "none",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out !important",
                  boxShadow: "20px 20px 60px #1F2634, -20px -20px 60px #1F2634",
                  width: "100%",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "all 0.4s ease-in-out",
                    filter: "brightness(1)",
                  },
                  "@media (max-width: 640px)": {
                    padding: "12px 0",
                    fontSize: "18px",
                  },
                  border: "3px solid #f9a8d4",
                }}
              >
                My Resume
              </Button>
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
