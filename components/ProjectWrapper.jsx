'use client'
import Image from "next/image"
import { motion,useInView } from "framer-motion"
import { useRef } from "react"
import { useRouter } from "next/navigation"

function ProjectWrapper({source,title,children,url}) {
  const router = useRouter()
  const reff = useRef(null)
  const inview = useInView(reff,{once:true})

  const handleClick = ()=>{
    router.push(url)
  }

  return (
    <motion.div initial={{scale:0}} whileTap={{scale:0.95, transition:{duration:0.5,type:"spring",stiffness:200}}} whileHover={{scale:1.05, transition:{duration:0.5,type:"spring",stiffness:200}}} animate={{scale:inview?1:0}} transition={{duration:1,type:"spring"}} ref={reff} className="w-full lg:w-1/4 h-auto flex flex-col items-center rounded-lg gap-8 border-2 border-red-500 cursor-pointer" onClick={handleClick}>
        <div className="w-full h-1/2">
            <Image alt={title} className="w-full rounded-tl-lg rounded-tr-lg  h-50 object-cover" src={source}  width={700} height={500}/>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-evenly">
            <h3 className="text-2xl text-white mb-6">{title}</h3>
            {children}
        </div>
    </motion.div>
  )
}

export default ProjectWrapper