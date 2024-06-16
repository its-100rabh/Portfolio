import React from "react";
import logo from "../assets/saurabhlogo.png";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import IconButton from "@mui/material/IconButton";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="logo"
          style={{ height: "100px", width: "100px", filter: "invert(100%)" }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/saurabh-mahapatra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton style={{ color: "white" }}>
            <FaLinkedinIn />
          </IconButton>
        </a>
        <a
          href="https://github.com/its-100rabh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton style={{ color: "white" }}>
            <FaGithub />
          </IconButton>
        </a>
        <a
          href="https://x.com/i__saurabh_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton style={{ color: "white" }}>
            <FaSquareXTwitter />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/_.100rabhh._/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton style={{ color: "white" }}>
            <FaInstagram />
          </IconButton>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
