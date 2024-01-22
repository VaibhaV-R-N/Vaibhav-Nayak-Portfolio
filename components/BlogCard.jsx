'use client'
import Image from "next/image"
import { MdAccessTimeFilled } from "react-icons/md";
import {useRouter} from "next/navigation"
import { useRef } from "react";
import { motion,useInView } from "framer-motion";


function BlogCard({title,imgSrc,date,url}) {
  const reff = useRef(null)
  const inview = useInView(reff,{once:true})
  const router = useRouter()
  const clickHandler = ()=>{
    router.push(url)  
  }

  return (
    <motion.div initial={{scale:0}} animate={{scale:inview?1:0}} whileTap={{scale:0.95, transition:{duration:0.5,type:"spring",stiffness:200}}} whileHover={{scale:1.05, transition:{duration:0.5,type:"spring",stiffness:200}}} transition={{duration:1,type:"spring"}} ref={reff} className=" cursor-pointer flex w-full lg:w-2/3 h-40 lg:h-52  border-2 border-red-500 rounded-md" onClick={clickHandler}>
        <Image alt={title} className="h-full w-1/4 object-cover rounded-md" src={imgSrc} width={500} height={500}/>
        <div className="flex flex-col p-2 h-full w-3/4 items-center justify-between" >
            <p className="text-white text-xl lg:text-2xl font-semibold">{title}</p>
            <div className="w-full h-1/4 flex items-center justify-end gap-2" > 
                <MdAccessTimeFilled className="text-yellow-400 h-full "/>
                <h4 className="text-red-500 text-xl font-normal">{date}</h4>
            </div>
        </div>
    </motion.div>
  )
}

export default BlogCard