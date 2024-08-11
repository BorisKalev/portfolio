import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../animations/animations.css";
import buttonP from "../assets/buttonP.png";
import buttonF from "../assets/buttonF.png";
const Hero = ({ toggleMode }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const emoji = document.querySelector(".emoji-shake");
    if (emoji) {
      emoji.classList.add("emoji-shake-load");
      setTimeout(() => {
        emoji.classList.remove("emoji-shake-load");
      }, 2000);
    }
  }, []);

  return (
    <>
      <div className="flex h-screen flex-col marginLeft md-max:ml-[1rem] xl-max:ml-[7rem] xl:ml-[10rem] ">
        <div className="flex flex-col w-[55%] lg-max:w-[80%] ">
          <h1 className="text md:mt-[2rem] xl:mt-[5rem]">
            {t("greeting")} <span className="emoji-shake">👋</span>
          </h1>
          <p className="text text-wrap mt-10 marginTop">
            <span className="font-bold">Boris Kalev. </span>
            {t("intro")}
          </p>
        </div>

        <div className="flex gap-10 items-center 3xl-max:mt-[5rem]">
          <p
            className={`text-xl emoji-hover-animation-left ${
              isHovered ? "animate-left" : ""
            }`}
          >
            👉
          </p>
          <button
            className="btn_resume bg-custom-gradient  rounded-md w-[200px] h-[40px] transition-colors duration-300 ease-in-out hover:bg-darkBlue hover:text-lightBg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/13uTzicaRB9xmRqR7G41Q9MO3SxKgneOd5_R0QdHN1s8/view",
                "_blank"
              )
            }
            rel="noopener noreferrer"
          >
            {toggleMode ? (
              <img src={buttonP} alt="button-resume" />
            ) : (
              <img src={buttonF} alt="button-resume" />
            )}
          </button>
          <p
            className={`text-xl emoji-hover-animation-right ${
              isHovered ? "animate-right" : ""
            }`}
          >
            👈
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
