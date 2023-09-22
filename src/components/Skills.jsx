import React from "react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitSquare,
  FaGithub,
} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className=" py-20 align-element  ">
      <SectionTitle text="stack technique" />
      <div className=" py-16 md:py-48 grid gap-8 grid-cols-2  md:grid-cols-4 lg:grid-cols-5">
        <SkillsCard
          title="JS"
          icon={<FaJs className="icon-element text-yellow-500" />}
        />
        <SkillsCard
          title="Html"
          icon={<FaHtml5 className="icon-element text-[#dd4b25]" />}
        />
        <SkillsCard
          title="Css"
          icon={<FaCss3Alt className="icon-element text-[#1771b5]" />}
        />
        <SkillsCard
          title="NodeJs"
          icon={<FaNodeJs className="icon-element text-[#88c249]" />}
        />
        <SkillsCard
          title="React"
          icon={<FaReact className="icon-element text-[#00d1f7]" />}
        />
        <SkillsCard
          title="Git"
          icon={<FaGitSquare className="icon-element text-[#e84e31]" />}
        />
        <SkillsCard
          title="GitHub"
          icon={<FaGithub className="icon-element text-white" />}
        />
        <SkillsCard
          title="MongoDb"
          icon={<BiLogoMongodb className="icon-element text-[#00e661]" />}
        />
        <SkillsCard
          title="PostgreSql"
          icon={<BiLogoPostgresql className="icon-element text-[#2f5e8e]" />}
        />
        <SkillsCard
          title="SQL"
          icon={<BsFiletypeSql className="icon-element text-emerald-500" />}
        />
      </div>
    </section>
  );
};

export default Skills;
