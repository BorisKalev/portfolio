import { useTranslation } from "react-i18next";
import Frameworks from "./Frameworks";
import "../animations/animations.css";

const OtherProjects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-[90%]">
        <div className="flex items-center ml-[7rem] sm-max:ml-[2rem] xl:ml-[10rem] mt-[7rem] font-amulya text-lightBlue text-2xl w-[85%] font-bold lg-max:w-[70%]">
          <h3 style={{ color: "var(--title-color)" }}>
            {t("title-projects2")}
          </h3>
        </div>

        <div className="flex justify-between marginLeft ml-[9rem] mt-[2rem] lg-max:flex-col lg-max:ml-[7rem] gap-4">
          <div className="flex flex-col w-[25%] lg-max:mt-8 lg-max:w-[80%]">
            <a
              href="https://gym-app.boriskalev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-effect-8 flex flex-col h-full p-4"
            >
              <span className="flex flex-col flex-grow">
                <h1 className="font-bold">{t("gym-title")}</h1>
                <p className="mt-2 flex-grow">{t("gym-desc")}</p>
                <div className="flex gap-3  mt-1">
                  <Frameworks>React</Frameworks>
                  <Frameworks>AOS</Frameworks>
                  <Frameworks>JS</Frameworks>
                </div>
              </span>
            </a>
          </div>
          <div className="flex flex-col w-[25%] lg-max:mt-4 lg-max:w-[80%]">
            <a
              href="https://recipe-app.boriskalev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-effect-8 flex flex-col h-full p-4"
            >
              <span className="flex flex-col flex-grow">
                <h1 className="font-bold">{t("recipe-title")}</h1>
                <p className="mt-3 flex-grow">{t("recipe-desc")}</p>
                <div className="flex gap-3  mt-2">
                  <Frameworks>React</Frameworks>
                  <Frameworks>API</Frameworks>
                  <Frameworks>JS</Frameworks>
                </div>
              </span>
            </a>
          </div>{" "}
          <div className="flex flex-col w-[25%] lg-max:mt-8 lg-max:w-[80%]">
            <a
              href="https://github.com/BorisKalev/Wordle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-effect-8 flex flex-col h-full p-4"
            >
              <span className="flex flex-col flex-grow">
                <h1 className="font-bold">Wordle</h1>
                <p className="mt-2 flex-grow">{t("wordle-desc")}</p>
                <div className="flex gap-3  mt-1">
                  <Frameworks>React</Frameworks>
                  <Frameworks>API</Frameworks> <Frameworks>JS</Frameworks>
                </div>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-custom-gradient2 w-full h-[5px] opacity-50 mt-[10rem]" />
    </>
  );
};

export default OtherProjects;
