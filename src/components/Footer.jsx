import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import "../animations/animations.css";

import footerF from "../assets/footerF.png";
import footerP from "../assets/footerP.png";
import { t } from "i18next";
const Footer = ({ toggleMode }) => {
  return (
    <div className="text-center mt-[12rem] sm-max:mb-10">
      <div className="relative inline-block">
        {toggleMode ? (
          <img
            src={footerP}
            alt="footer"
            className="w-[650px] z-[0] sm-max:w-[450px] sm-max:h-[100px]"
          />
        ) : (
          <img src={footerF} alt="footer" className="w-[650px] z-[0]" />
        )}
        <p
          className="absolute top-[3vh] sm-max:top-[1vh] left-1/2 transform -translate-x-1/2 z-[100]"
          style={{ color: `${toggleMode ? "black" : "white"}` }}
        >
          {t("createBy")}
        </p>
        <div className="flex justify-center  gap-12 ">
          <h5 className="absolute top-[9vh] left-1/4 flex items-center sm-max:left-12 sm-max:top-[6vh] hover:cursor-pointer hover:translate-y-[-3px] hover:text-white transition-transform ease-out duration-300">
            <FaGithub style={{ color: `${toggleMode ? "black" : "white"}` }} />
            <a
              href="https://github.com/BorisKalev"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2  no-underline`}
              style={{ color: `${toggleMode ? "black" : "white"}` }}
            >
              GitHub
            </a>
          </h5>
          <h5 className=" absolute  top-[9vh] flex items-center  sm-max:top-[6vh] hover:cursor-pointer hover:translate-y-[-3px] hover:text-white transition-transform ease-out duration-300">
            <MdOutlineMailOutline
              style={{ color: `${toggleMode ? "black" : "white"}` }}
            />
            <a
              href="mailto:boris_kalev_14@hotmail.com"
              className="ml-2  no-underline"
              style={{ color: `${toggleMode ? "black" : "white"}` }}
            >
              Email
            </a>
          </h5>
          <h5 className=" absolute top-[9vh] right-1/4 flex items-center sm-max:top-[6vh] sm-max:right-12 hover:cursor-pointer hover:translate-y-[-3px] hover:text-white transition-transform ease-out duration-300">
            <FaLinkedin
              style={{ color: `${toggleMode ? "black" : "white"}` }}
            />
            <a
              href="https://www.linkedin.com/in/boris-kalev-977972278/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 no-underline"
              style={{ color: `${toggleMode ? "black" : "white"}` }}
            >
              LinkedIn
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
