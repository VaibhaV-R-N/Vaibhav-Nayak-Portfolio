'use client'

import { useDispatch,useSelector } from "react-redux"
import { toggleMenu } from "@/ReduxGlobal/Features/Menu/MenuSlice"
import { Cookie } from 'next/font/google'
import { motion } from "framer-motion"
const Sans = Cookie({ subsets: ['latin'],weight:["400"],variable:"--cookie_font" })

function MenuItem({name,children,textstyle}) {
  const dispatch = useDispatch()
  const open = useSelector(state=>state.Menu.open)
  const menuItemClickHandler =()=>{
    if(open)
      dispatch(toggleMenu())
  }
  return (
    <motion.div whileTap={{scale:0.8, transition:{duration:0.5,type:"spring"}}} whileHover={{scale:1.2, transition:{duration:0.5,type:"spring"}}} className={`flex p-4 lg:p-0 lg:rounded-none w-full lg:w-32 h-auto items-center justify-center gap-2`} onClick={menuItemClickHandler}>
        {children}
        <h2 className={`${Sans.className} text-5xl lg:text-4xl ${textstyle} font-cookie  text-center`}>{name}</h2>  
    </motion.div>
  )
}

export default MenuItem