'use client'
import SkillWrapper from "@/components/SkillWrapper"
import Skill from "@/components/Skill"
import { SiCplusplus,SiGnubash,SiLua,SiExpress,SiMongodb,SiTailwindcss,SiFramer,SiRedux,SiApollographql,SiTypescript,SiMui } from "react-icons/si";
import { FaC,FaNodeJs,FaGitAlt } from "react-icons/fa6";
import { FaJava,FaPython,FaPhp,FaHtml5,FaCss3,FaReact,FaLinux,FaNpm } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbFileTypeXml,TbBrandNextjs,TbBrandMysql,TbBrandVscode,TbBrandSocketIo,TbApi,TbBrandOauth}  from "react-icons/tb";
import { BsFiletypeJson } from "react-icons/bs";
import { GrGraphQl } from "react-icons/gr";

import {usePathname} from "next/navigation"
import { useEffect } from "react";
import { setCurrent } from "@/ReduxGlobal/Features/Menu/MenuSlice"
import { useDispatch } from "react-redux";

function Skills() {
  const path = usePathname()
  const dispatch = useDispatch()
  useEffect(()=>{
 
    dispatch(setCurrent({current:path}))
  },[dispatch,path])
  return (
    <div className="w-full min-h-screen relative mt-8 z-10 flex flex-col lg:flex-wrap lg:flex-row p-4 items-center justify-center gap-14 lg:gap-10">
        <SkillWrapper title={"Coding languages"}>
            <Skill skillName={"C"}>
              <FaC className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"C++"}>
              <SiCplusplus className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Java"}>
              <FaJava className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"JavaScript"}>
              <IoLogoJavascript className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"TypeScript"}>
              <SiTypescript className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Python"}>
              <FaPython className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Bash"}>
              <SiGnubash className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Lua"}>
              <SiLua className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Php"}>
              <FaPhp className="w-full h-2/3 text-yellow-400"/>
            </Skill>
        </SkillWrapper>

        <SkillWrapper title={"Markup Languages And Data Interchange Formats"}>
            <Skill skillName={"HTML"}>
              <FaHtml5 className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"CSS"}>
              <FaCss3 className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"XML"}>
              <TbFileTypeXml className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"JSON"}>
              <BsFiletypeJson className="w-full h-2/3 text-yellow-400"/>
            </Skill>
        </SkillWrapper>

        <SkillWrapper title={"Front-End"}>
            <Skill skillName={"ReactJS"}>
              <FaReact className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Redux"}>
              <SiRedux className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"NextJS"}>
              <TbBrandNextjs className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"TailwindCSS"}>
              <SiTailwindcss className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"FramerMotion"}>
              <SiFramer className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"MaterialUI"}>
              <SiMui className="w-full h-2/3 text-yellow-400"/>
            </Skill>
        </SkillWrapper>

        <SkillWrapper title={"Back-End"}>
            <Skill skillName={"NodeJS"}>
              <FaNodeJs className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"ExpressJS"}>
              <SiExpress className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"SocketIO"}>
              <TbBrandSocketIo className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"REST"}>
              <TbApi className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"GraphQL"}>
              <GrGraphQl className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Apollo"}>
              <SiApollographql className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"OAuth2"}>
              <TbBrandOauth className="w-full h-2/3 text-yellow-400"/>
            </Skill>
        </SkillWrapper>

        <SkillWrapper title={"Database"}>
            <Skill skillName={"SQL"}>
              <TbBrandMysql className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"MongoDB"}>
              <SiMongodb className="w-full h-2/3 text-yellow-400"/>
            </Skill>
        </SkillWrapper>

        <SkillWrapper title={"Development tools and version control"}>
            <Skill skillName={"Linux"}>
              <FaLinux className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"Git"}>
              <FaGitAlt className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"NPM"}>
              <FaNpm className="w-full h-2/3 text-yellow-400"/>
            </Skill>
            <Skill skillName={"VSCode"}>
              <TbBrandVscode className="w-full h-2/3 text-yellow-400"/>
            </Skill>
        </SkillWrapper>

    </div>
  )
}

export default Skills