'use client'
import Mycard from "@/components/Mycard";
import {usePathname} from "next/navigation"
import MoreInfo from "@/components/MoreInfo";
import { useEffect } from "react";
import { setCurrent } from "@/ReduxGlobal/Features/Menu/MenuSlice"
import { useDispatch } from "react-redux";

export default function Home() {
  const path = usePathname()
  const dispatch = useDispatch()
  useEffect(()=>{
 
    dispatch(setCurrent({current:path}))
  },[dispatch,path])

  return (
    
    <div className="w-full h-auto">
          <Mycard/>
          <MoreInfo/>
        
    </div>
    
  )
}
