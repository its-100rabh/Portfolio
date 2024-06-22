import React from "react";
import { PROJECTS } from "../constants";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/system";

const Projects = () => {
  const ButtonContainer = styled("div")`
    width: 95%;
    max-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
  `;
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-bold">
        <span className="bg-gradient-to-r from-pink-300 via-slate-200 to-purple-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <p className="mt-20 max-w-xl tracking-wider text-center mx-auto text-lg font-medium">
          For additional projects, please visit my GitHub profile.
        </p>
        <div className="flex mx-auto justify-center mt-10 mb-10">
          <ButtonContainer>
            <Button
              variant="contained"
              href="https://github.com/its-100rabh"
              startIcon={<GitHubIcon />}
              sx={{
                background: "linear-gradient(225deg, #140d01 0%, #2d1a07 100%)",
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
              My GitHub
            </Button>
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
};

export default Projects;
