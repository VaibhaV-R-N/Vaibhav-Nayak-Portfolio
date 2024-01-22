'use client'

import Link from "next/link"
import MenuItem from "./MenuItem"
import { FaHome, FaBloggerB } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";
import { toggleMenu } from "@/ReduxGlobal/Features/Menu/MenuSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { getTextIcon } from "@/utils/setPathState";

function NavBar() {
  const dispatch = useDispatch();
  const current = useSelector((state)=>state.Menu.current)

  const menuclickHandler =()=>{
    dispatch(toggleMenu())
  }

  return (
    <div className={`w-full h-28 z-10 relative `}>
        
        <div className=" w-full h-full flex flex-row  justify-between p-4">
            <Link className="text-white text-4xl z-10 relative" href={'/'}><MenuItem name={"Home"} textstyle={getTextIcon(current,'/').text}><FaHome className={`w-6 h-6 ${getTextIcon(current,'/').icon}`}/></MenuItem></Link>
            <ul className="hidden lg:flex w-2/3  h-full absolute right-4   lg:flex-row lg:gap-8 lg:text-4xl  justify-end text-xl text-white">
                
                <li><Link href={'/skills'}><MenuItem name={"Skills"} textstyle={getTextIcon(current,'/skills').text} ><FaBoltLightning className={`w-6 h-6 ${getTextIcon(current,'/skills').icon}`}/></MenuItem></Link></li>
                <li><Link href={'/projects'}><MenuItem name={"Projects"} textstyle={getTextIcon(current,'/projects').text}><GrProjects className={`w-6 h-6 ${getTextIcon(current,'/projects').icon}`}/></MenuItem></Link></li>
                <li><Link href={'/blogs'}><MenuItem name={"Blogs"} textstyle={getTextIcon(current,'/blogs').text}><FaBloggerB className={`w-6 h-6 ${getTextIcon(current,'/blogs').icon}`}/></MenuItem></Link></li>
                <li><Link href={'/contact'}><MenuItem name={"Contact"} textstyle={getTextIcon(current,'/contact').text}><MdContactMail className={`w-6 h-6 ${getTextIcon(current,'/contact').icon}`}/></MenuItem></Link></li>
            </ul>
            <div className="cursor-pointer lg:hidden w-14 h-12 rounded-md flex flex-col items-center justify-evenly z-10" onClick={menuclickHandler}>
              <div className="w-[90%] h-[6px] bg-yellow-400 rounded-full"></div>
              <div className="w-[90%] h-[6px] bg-red-500 rounded-full"></div>
              <div className="w-[90%] h-[6px] bg-yellow-400 rounded-full"></div>
            </div>
        </div>
        
    </div>
  )
}

export default NavBar