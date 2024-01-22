'use client'
import ProjectWrapper from "@/components/ProjectWrapper"
import TechUsed from "@/components/TechUsed"

import { SiGnubash,SiLua,SiExpress,SiMongodb,SiRedux, SiMui, SiSocketdotio} from "react-icons/si";
import { FaNodeJs} from "react-icons/fa6";
import { FaPython,FaHtml5,FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs}  from "react-icons/tb";
import {usePathname} from "next/navigation"
import { useEffect } from "react";

import { setCurrent } from "@/ReduxGlobal/Features/Menu/MenuSlice"
import { useDispatch } from "react-redux";
function Projects() {
  const path = usePathname()
  const dispatch = useDispatch()
  useEffect(()=>{
 
    dispatch(setCurrent({current:path}))
  },[dispatch,path])
  return (
    <div className="relative mt-6 z-10 w-full min-h-screen p-4 flex flex-col lg:flex-wrap lg:flex-row items-center justify-center gap-14">
        
        <ProjectWrapper source={"/projects/nexus.png"} title={"nexus-chat"} url={"https://nexus-chat.vercel.app"}>
          <TechUsed>
              <TbBrandNextjs className="w-8 h-8 text-yellow-400"/>
              <SiSocketdotio className="w-8 h-8 text-yellow-400"/>
              <FaNodeJs className="w-8 h-8 text-yellow-400"/>
              <SiMui className="w-8 h-8 text-yellow-400"/>
              <SiRedux className="w-8 h-8 text-yellow-400"/>
          </TechUsed>
          <p className="text-md text-center text-gray-400 p-3 leading-5 tracking-wider">
          Welcome to Nexus Chat! 🌐💬

          Engage in lively discussions in our public room or create private spaces for exclusive conversations. Share text and images effortlessly – your perfect platform for dynamic online connections! 🚀📸

          #NexusChat #ChatApp #ConnectOnline
          </p>
        </ProjectWrapper>

        <ProjectWrapper source={"/projects/blogchan.png"} title={"Blog-chan"} url={"https://blog-chan.onrender.com"}>
          <TechUsed>
              <FaHtml5 className="w-8 h-8 text-yellow-400"/>
              <FaCss3 className="w-8 h-8 text-yellow-400"/>
              <FaNodeJs className="w-8 h-8 text-yellow-400"/>
              <IoLogoJavascript className="w-8 h-8 text-yellow-400"/>
              <SiMongodb className="w-8 h-8 text-yellow-400"/>
              <SiExpress className="w-8 h-8 text-yellow-400"/>
          </TechUsed>
          <p className="text-md text-center text-gray-400 p-3 leading-5 tracking-wider">
          Blog-chan, your go-to platform for anonymous self-expression! 📝💬 Create an account, post blogs with text, images 📸, videos 🎥, and audio clips 🎧. Connect with others, follow, and build a community. Express freely with likes ❤️ and dislikes 👎. Join today and let your thoughts flow anonymously! #BlogChan #AnonymousBlogging 🚀
          </p>
        </ProjectWrapper>
        <ProjectWrapper source={"/projects/flappybird.png"} title={"flappy Bird"} url={"https://github.com/VaibhaV-R-N/flappybird"}>
            <TechUsed>
              <FaHtml5 className="w-8 h-8 text-yellow-400"/>
              <FaCss3 className="w-8 h-8 text-yellow-400"/>
              <IoLogoJavascript className="w-8 h-8 text-yellow-400"/>
            </TechUsed>
          <p className="text-md text-center text-gray-400 p-3 leading-5 tracking-wider">
          Dive into the nostalgia with our HTML canvas-based game! 🐦 Score points, navigate obstacles, and experience the joy of Flappy Bird. 🎮 #FlappyBirdClone #HTMLCanvasGaming
          </p>
        </ProjectWrapper>
        <ProjectWrapper source={"/projects/laserpong.png"} title={"Laser Pong"} url={"https://github.com/VaibhaV-R-N/LaserPong"}>
          <TechUsed>
            <SiLua className="w-8 h-8 text-yellow-400"/>
          </TechUsed>
          <p className="text-md text-center text-gray-400 p-3 leading-5 tracking-wider">
          A Love2D and Lua creation! 🕹️ Classic Pong with a futuristic twist – activate lasers at 50% HP for extra damage! 🔫💥 Enjoy seamless gameplay and strategic excitement. 🚀 #LaserPong #Love2D #LuaProgramming

          </p>
        </ProjectWrapper>
        <ProjectWrapper source={"/projects/annie.jpeg"} title={"Annie"} url={"https://github.com/VaibhaV-R-N/Anie"}>
          <TechUsed>
            <SiGnubash className="w-8 h-8 text-yellow-400"/>
          </TechUsed>
          <p className="text-md text-center text-gray-400 p-3 leading-5 tracking-wider">
          Meet Annie, your anime companion! 🌟🖥️ This shell script is designed for anime enthusiasts, utilizing web scraping to fetch the latest data on anime series listed in the config file. 📜

Stay in the loop with Annie&apos;s desktop notifications! 🚨 Receive alerts as soon as new episodes of your favorite anime are released. #AnimeAlerts #WebScrapingMagic ✨
          </p>
        </ProjectWrapper>
        <ProjectWrapper source={"/projects/moonpie.png"} title={"Moon Pie"} url={"https://github.com/VaibhaV-R-N/MoonPie"}>
          <TechUsed>
            <FaPython className="w-8 h-8 text-yellow-400"/>
          </TechUsed>
          <p className="text-md text-center text-gray-400 p-3 leading-5 tracking-wider">
          Meet Moon Pie, your Python companion for Pokémon Sun and Moon! 🌙🥧 Unlock Pokémon spawn locations with ease using Moon Pie&apos;s keybindings. 🕹️💡 Access Smogon&apos;s strategy dex to master your gameplay! 🌟 Embark on your Pokémon journey with Moon Pie, your go-to sidekick! 🌴🔍 #MoonPie #PokémonHelper 🚀
          </p>
        </ProjectWrapper>
    </div>
  )
}

export default Projects