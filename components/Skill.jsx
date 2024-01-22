'use client'
import React from 'react'
import { motion } from 'framer-motion'

function Skill({children,skillName}) {
  return (
    <motion.div whileTap={{scale:0.90}} whileHover={{scale:1.1}} transition={{duration:1, type:"spring" ,stiffness:300}} className='w-24 h-24 lg:w-28 lg:h-28 rounded-md p-2 flex flex-col items-center justify-evenly'>
        {children}
        <h3 className='text-xl text-gray-400 mt-2'>{skillName}</h3>
    </motion.div>
  )
}

export default Skill