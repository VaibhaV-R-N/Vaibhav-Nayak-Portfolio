'use client'
import React from 'react'
import { motion,useInView } from 'framer-motion'
import { useRef } from 'react';

function SkillWrapper({children,title}) {
    const ref = useRef(null)
    const inview = useInView(ref,{once:true});

    return (
        <motion.div  initial={{scale:0}} animate={{scale: inview? 1:0}} transition={{duration:1, type:"spring" }}  ref={ref}  className='w-full lg:w-1/3 h-auto flex flex-col  items-center justify-between p-2 rounded-xl border-2 border-red-500' >
            <h2 className='text-center text-white text-2xl mb-5'>{title}</h2>
            <div className='w-full h-auto p-2 flex flex-wrap items-center justify-center gap-8'>
                {children}
            </div>
        </motion.div>
        
    )
}

export default SkillWrapper