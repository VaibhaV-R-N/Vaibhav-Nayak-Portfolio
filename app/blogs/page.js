'use client'
import BlogCard from "@/components/BlogCard"
import {usePathname} from "next/navigation"

import { useEffect } from "react";
import { setCurrent } from "@/ReduxGlobal/Features/Menu/MenuSlice"
import { useDispatch } from "react-redux";
function Blogs() {
  const path = usePathname()
  const dispatch = useDispatch()
  useEffect(()=>{
 
    dispatch(setCurrent({current:path}))
  },[dispatch,path])
  return (
    <div className="relative z-10 h-auto p-4 mt-6 lg:p-2 flex flex-col items-center justify-center gap-20">

      <BlogCard imgSrc={"/blogs/mrrobot.jpg"} title={"Mr. Robot - A Modern Masterpiece"} date={"07/01/24"} url={"/blogs/1"}/>

    </div>
  )
}

export default Blogs