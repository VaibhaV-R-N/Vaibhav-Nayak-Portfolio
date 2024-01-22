'use client'

import { useSelector,useDispatch } from "react-redux"
import { toggleMenu } from "@/ReduxGlobal/Features/Menu/MenuSlice"

function Backdrop() {
  const open = useSelector((state)=>state.Menu.open);
  const dispatch = useDispatch();
  const styl = open?"block":"hidden"

  const backDropClickhandler = ()=>{
    dispatch(toggleMenu())
  }
  
  return (
    <div className={`fixed ${styl} z-20 bg-slate-950/55 backdrop-blur-md w-full h-screen`} onClick={backDropClickhandler}>

    </div>
    
  )
}

export default Backdrop