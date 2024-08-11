import projectGIF from "../assets/projects.gif";
import { useTranslation } from "react-i18next";
import netflix from "../assets/netflixML.png";
import unihosting from "../assets/unihosting.png";
import Frameworks from "./Frameworks";
import { FaSquareArrowUpRight } from "react-icons/fa6";
const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-between items-center ml-[7rem] marginLeft xl-max:justify-normal xl:ml-[10rem] font-amulya text-lightBlue text-2xl w-[85%] font-bold lg-max:w-[70%]">
        <h3 style={{ color: "var(--title-color)" }}>{t("title-projects")}</h3>

        <img
          src={projectGIF}
          alt="Projects GIF"
          className="mt-4 absolute left-[73%] top-[90%] w-[350px] h-[350px] xl-max:relative xl-max:w-[250px] xl-max:h-[250px] xl-max:left-5"
        />
      </div>

      <div className="ml-[8rem] xl:ml-[10rem] marginLeft">
        <div className="flex items-center lg-max:flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col text-wrap w-[400px]">
              <a
                className="flex items-center"
                href="https://netflix-react-copy.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-bold text-xl ">Netflix</h1>
                <FaSquareArrowUpRight className="ml-2 text-darkBlue" />
              </a>

              <p className="font-calibre mt-[2rem]">
                {t("netflix-explanation")}
              </p>
            </div>
            <div className="flex gap-3">
              <Frameworks>React</Frameworks>
              <Frameworks>Tailwind</Frameworks>
              <Frameworks>Firebase</Frameworks>
              <Frameworks>API</Frameworks>
              <Frameworks>JavaScript</Frameworks>
            </div>
          </div>
          <a
            href="https://netflix-react-copy.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={netflix}
              alt="moniteur"
              className="w-[700px] h-[500px] xl:ml-[20px] xl-max:w-[700px] xl-max:h-full"
            />
          </a>
        </div>
      </div>

      <div className="ml-[8rem] xl:ml-[10rem] marginLeft">
        <div className="flex items-center lg-max:flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col text-wrap w-[400px]">
              <a
                className="flex items-center"
                href="https://unihosting.boriskalev.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="font-bold text-xl ">UniHosting</h1>
                <FaSquareArrowUpRight className="ml-2 text-darkBlue" />
              </a>
              <p className="font-calibre mt-[2rem]">{t("Hosting-Expl")}</p>
            </div>
            <div className="flex gap-3">
              <Frameworks>React</Frameworks>
              <Frameworks>Tailwind</Frameworks>
              <Frameworks>Typescript</Frameworks>
            </div>
          </div>
          <a
            href="https://unihosting.boriskalev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img src={unihosting} alt="screen sizes for UniHosting" />
          </a>
        </div>
      </div>
      <div className="bg-custom-gradient2 w-full h-[5px] opacity-50 mt-[10rem]" />
    </>
  );
};

export default Projects;
