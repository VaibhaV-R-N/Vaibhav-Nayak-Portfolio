'use client'

import Link from "next/link"
import MenuItem from "./MenuItem"
import { FaBloggerB } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { useSelector } from "react-redux";
import { getTextIcon } from "@/utils/setPathState";
function MenuComponent() {

  const open = useSelector((state)=>state.Menu.open)
  const current = useSelector((state)=>state.Menu.current)

  const styl = open?"flex flex-col items-center justify-center gap-12":"hidden"

  return (
    <div className={` w-2/3 h-auto  p-2 ${styl} fixed z-20 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}>
        <Link href={'/skills'}><MenuItem name={"Skills"} textstyle={getTextIcon(current,'/skills').text}><FaBoltLightning className={`w-6 h-6 ${getTextIcon(current,'/skills').icon}`}/></MenuItem></Link>
        <Link href={'/projects'}><MenuItem name={"Projects"} textstyle={getTextIcon(current,'/projects').text}><GrProjects className={`w-6 h-6 ${getTextIcon(current,'/projects').icon}`}/></MenuItem></Link>
        <Link href={'/blogs'}><MenuItem name={"Blogs"} textstyle={getTextIcon(current,'/blogs').text}><FaBloggerB className={`w-6 h-6 ${getTextIcon(current,'/blogs').icon}`}/></MenuItem></Link>
        <Link href={'/contact'}><MenuItem name={"Contact"} textstyle={getTextIcon(current,'/contact').text}><MdContactMail className={`w-6 h-6 ${getTextIcon(current,'/contact').icon}`}/></MenuItem></Link>
    </div>
  )
}

export default MenuComponent