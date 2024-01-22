'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from "framer-motion"
import { useRef } from "react"
export default function Content({source,title}) {
  const contentRef = useRef()
  const inView = useInView(contentRef,{once:true})
  return (
    <motion.div initial={{scale:0}} animate={{scale:inView?1:0}} transition={{duration:1}}  ref={contentRef} className={`p-1 w-96 h-80 border-2 border-red-500 rounded-md flex flex-wrap flex-col items-center justify-evenly`}>
        <Image alt={title} className='w-full h-2/3 rounded-md object-contain' width={720} height={720} src={source}/>
        <h3 className='text-yellow-400 text-lg'>{title}</h3>
    </motion.div>
  )
}
