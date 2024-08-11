import React from "react";
import { useTranslation } from "react-i18next";
import { CiLight, CiDark } from "react-icons/ci";

const Navbar = ({ toggleMode, setToggleMode }) => {
  const { i18n } = useTranslation();

  // Determine the current language
  const language = i18n.language === "fr";

  // Function to toggle the language
  const handleLanguageChange = () => {
    const newLang = language ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const handleMode = () => {
    setToggleMode(!toggleMode);
  };

  return (
    <div
      className="flex justify-end items-center py-5 mx-10 w-[90%]"
      id="navbar"
    >
      <div className="relative mr-4 bottom-0.5">
        <button className="bg-none text-xl" onClick={handleLanguageChange}>
          {language ? "EN" : "FR"}
        </button>
      </div>
      <div className="relative">
        {toggleMode ? (
          <CiLight onClick={handleMode} className="cursor-pointer text-xl" />
        ) : (
          <CiDark onClick={handleMode} className="cursor-pointer text-xl" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
