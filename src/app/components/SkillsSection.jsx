import React from "react";
import { FaHtml5, FaCss3, FaJs, FaPython, FaAngular } from "react-icons/fa";
import {
  BiLogoGoogleCloud,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiElectron } from "react-icons/si";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";

const SkillsSection = () => {
  return (
    <section className="text-white" id="skills">
      <div className="px-4 pb-16 sm:pb-16 xl:px-16 mt-4 md:mt-0 text-left flex flex-col items-center h-full">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Skills
        </h2>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#E34F26]">
            <FaHtml5 color="black" size={"20"} />
            <p className="text-sm text-center text-black">HTML</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#264DE4]">
            <FaCss3 color="black" size={"20"} />
            <p className="text-sm text-center text-black">CSS</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#F7DF1E]">
            <FaJs color="black" size={"20"} />
            <p className="text-sm text-center text-black">Javascript</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#3776AB]">
            <FaPython color="black" size={"20"} />
            <p className="text-sm text-center text-black">Python</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#ff5151]">
            <FaAngular color="black" size={"20"} />
            <p className="text-sm text-center text-black">Angular</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#007acc]">
            <BiLogoTypescript color="black" size={"20"} />
            <p className="text-sm text-center text-black">TypeScript</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#bfbfbf]">
            <SiElectron color="black" size={"30"} />
            <p className="text-sm text-center text-black">Electron</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#512bd4]">
            <p className="text-sm text-center text-black">.NET</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#34A853]">
            <BiLogoGoogleCloud color="black" size={"20"} />
            <p className="text-sm text-center text-black">GCP</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#00758f]">
            <TbBrandMysql color="black" size={"20"} />
            <p className="text-sm text-center text-black">MySQL</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-200 shadow-md p-6 hover:bg-[#0064a5]">
            <BiLogoPostgresql color="black" size={"20"} />
            <p className="text-sm text-center text-black">PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
