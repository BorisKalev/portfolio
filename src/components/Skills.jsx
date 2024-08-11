import { useTranslation } from "react-i18next";
import devGif from "../assets/development.gif";
import { GrSettingsOption } from "react-icons/gr";
import { RiToolsFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between items-center sm-max:ml-[2rem] xl:mb-[-85px] mt-[2rem] ml-[7rem] xl-max:justify-normal xl:ml-[10rem] font-amulya text-lightBlue text-2xl w-[85%] font-bold lg-max:w-[70%]">
        <h3 style={{ color: "var(--title-color)" }}>{t("skills-title")}</h3>
        <img
          src={devGif}
          alt="Projects GIF"
          className="w-[350px] h-[350px] xl-max:w-[250px] xl-max:h-[250px] "
        />
      </div>
      <div className="flex justify-between flex-wrap lg-max:flex lg-max:justify-normal lg-max:flex-col ">
        <div className="flex-1 mx-20 ml-[7rem] xl:ml-[10rem] sm-max:ml-[2rem]">
          <div className="flex items-center mt-12 ">
            <GrSettingsOption className=" w-10 h-10" />
            <h3 className="ml-2">{t("development-title")}</h3>
          </div>
          <div className="grid grid-cols-3  max-w-[450px] mt-6">
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              HTML
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              CSS
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              JAVASCRIPT
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              TAILWIND
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              REACT
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              .NET
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              SQL
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              C#
            </div>
            <div className="flex justify-center items-center w-24 h-24 border border-darkBlue rounded-full  mt-6">
              JAVA
            </div>
          </div>
        </div>
        <div className="flex-1 mx-20 ml-[7rem] sm-max:ml-[2rem]">
          <div className="flex items-center mt-12 ">
            <RiToolsFill className=" w-10 h-10 mr-2" />
            <h3>{t("tools-and-knowledge-title")}</h3>
          </div>
          <div className="flex flex-col text-xl mt-6 leading-6">
            <h5 className="flex items-center mt-6">
              <IoIosCheckmark className="text-2xl mr-6" /> Git
            </h5>
            <h5 className="flex items-center mt-6">
              <IoIosCheckmark className="text-2xl mr-6" /> GitHub
            </h5>
            <h5 className="flex items-center mt-6">
              <IoIosCheckmark className="text-2xl mr-6" /> {t("command-line")}
            </h5>
            <h5 className="flex items-center mt-6">
              <IoIosCheckmark className="text-2xl mr-6" /> Wordpress
            </h5>
            <h5 className="flex items-center mt-12">
              <FaLightbulb className="mr-8" /> SEO
            </h5>
            <h5 className="flex items-center mt-6">
              <FaLightbulb className="mr-8" /> {t("usability")}
            </h5>
            <h5 className="flex items-center mt-6">
              <FaLightbulb className="mr-8" /> {t("debugging")}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
