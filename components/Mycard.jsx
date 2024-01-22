'use client'

import Image from "next/image"

import { FaDownload, } from "react-icons/fa6";
import { motion} from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import HeroCanvas from "./HeroCanvas";
import { useRouter } from "next/navigation";
function Mycard() {
  const [currentSlide,setCurrentSlide] = useState(1)
  const router = useRouter()
  useEffect(()=>{

  },[currentSlide])

 

  const previousClickHandler = ()=>{
      if(currentSlide === 1){
        setCurrentSlide(4)
      }else{
        setCurrentSlide(prevState=>prevState-1)
      }
  }

  const nextClickHandler = ()=>{
      if(currentSlide === 4){
        setCurrentSlide(1)
      }else{
        setCurrentSlide(prevState=>prevState+1)
      }
  }


  const getComponent = ()=>{
      switch (currentSlide) {
        case 1:
          return <motion.p key={currentSlide} initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} className="rounded-md w-[80%] lg:w-[70%]  h-auto text-center text-white text-xl lg:text-4xl p-3">
          👋 Hi there! I&apos;m <span className="text-yellow-400 text-2xl lg:text-5xl">Vaibhav Nayak✨ </span> Welcome to my website!
          </motion.p>
        case 2:
          return <motion.p key={currentSlide} initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} className="rounded-md w-[80%] lg:w-[70%] h-auto text-center text-white text-xl lg:text-4xl">
            <span className="text-yellow-400">Who am i? </span> I&apos;m just an ordinary guy 🧑 with a passion for web development 💻, game development 🎮, programming 💻, and all things Linux 🐧.
          </motion.p>
        case 3:
          return <motion.p key={currentSlide} initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} className="rounded-md w-[80%] lg:w-[70%] h-auto text-center text-white text-xl lg:text-4xl">
                This place is a sanctuary where I embrace freedom from censorship and manipulation, fostering an environment for open expression and authentic discourse✨.
          </motion.p>
        case 4:
          return <motion.p key={currentSlide} initial={{scale:0}} animate={{scale:1}} transition={{duration:0.5}} className="rounded-md w-[80%] lg:w-[70%] h-auto text-center text-white text-xl  lg:text-4xl">
              Feel free to explore my website and have some fun! 🌐🎉
          </motion.p> 
        default:
          return null
      }
      
    
  }

  return (
   
    <div className="p-4  w-full min-h-screen h-auto flex flex-col items-center justify-center gap-5 relative  z-10 ">
        <HeroCanvas/>
        <Image src={"/one.png"} className=" bg-center rounded-full relative z-20 w-72 h-72 lg:w-80 lg:h-80 object-contain" width={500} height={500} alt="profile pic"/>
        <div className="relative z-20 w-[100%] lg:w-[80%] h-[40vh] p-2 flex items-center justify-center gap-5 flex-row">
          
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.90}} transition={{duration:1, type:"spring", stiffness:300}} className="w-[10%] lg:w-[15%] h-1/2" ><IoIosArrowBack onClick={previousClickHandler} className="w-full h-full text-red-500 "/></motion.div>

            {getComponent()} 

            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.90}} transition={{duration:1, type:"spring", stiffness:300}} className="w-[10%] lg:w-[15%] h-1/2" ><IoIosArrowForward onClick={nextClickHandler} className="w-full h-full text-yellow-400 "/></motion.div>
          
        </div>
        <motion.div onClick={()=>{router.push("https://docs.google.com/document/d/1UMWWTByMYLrXEEQpAhSFOGmTIehY4aWNypKK5Nz7qYw/edit?usp=sharing")}} whileHover={{scale:1.1}} whileTap={{scale:0.90}} transition={{duration:1, type:"spring", stiffness:300}} className="bg-slate-950 relative z-20 w-2/3 lg:row-start-3 lg:w-1/4 lg:h-2/3 border-red-500 rounded-lg  border-4 flex flex-row items-center justify-center gap-3 p-8 cursor-pointer">
            <h3 className="text-white text-xl">Resume</h3>
            <FaDownload className="text-yellow-400 w-8 h-8"/>
        </motion.div> 
    </div>
    
  )
}

export default Mycard