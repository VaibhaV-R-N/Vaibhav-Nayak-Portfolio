"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
export default function ContentWrapper({children,title}) {
  const wrapperRef = useRef()
  const inView = useInView(wrapperRef,{once:true})
  return (
    <motion.div initial={{translateY:300}} animate={{translateY:inView?0:300}} transition={{duration:1}} ref={wrapperRef} className='w-full p-4 h-auto ' >
        <h3 className='w-full text-2xl lg:text-4xl text-center text-yellow-400 mb-10'>{title}</h3>
        <div className='w-full h-auto flex flex-row flex-wrap items-center justify-center gap-10'>
            {children}
        </div>
    </motion.div>
  )
}
