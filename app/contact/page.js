'use client'

import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { FaGoogle,FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";

import {useCookies} from "next-client-cookies"
import { useSelector,useDispatch } from "react-redux";
import { setSubject,setMessage } from "@/ReduxGlobal/Features/Contact/ContactSlice";
import {usePathname} from "next/navigation"


import { motion } from "framer-motion";
import Link from "next/link";
import { setCurrent } from "@/ReduxGlobal/Features/Menu/MenuSlice"

function Contact() {
  const path = usePathname()
  const dispatch = useDispatch()
  useEffect(()=>{
 
    dispatch(setCurrent({current:path}))
  },[dispatch,path])
  const router = useRouter()
  const cookies = useCookies()
  const [url,setUrl] = useState("")
  const [formError,setFormError] = useState("")
  const subject = useSelector((state)=>state.Contact.subject)
  const Message = useSelector((state)=>state.Contact.message)



  const changeHandler =(e,identifier)=>{
    setFormError("")
    if(identifier === "subject")
      dispatch(setSubject({subject:e.target.value}))
    else if(identifier === "message")
      dispatch(setMessage({message:e.target.value}))
  }

  const geturl = async ()=>{
    const resp = await fetch('/api/geturl')
    const {url:resUrl} = await resp.json() 
    setUrl(resUrl)
  }

  useEffect(()=>{
    geturl()
  },[url])

  const sendMail = async()=>{
    if(!cookies.get("access"))
      router.push(url)
    else{
      if(!Message.length || !subject.length){
        setFormError("fields cannot be empty! 🚨")
        return
      }
      else{
        setFormError("Sending mail ⌛...")
      }
      let response
      try {
        response =  await fetch("/api/sendmail",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            subject,Message
          })
        })
      } catch (error) {
        response = error.message
      }
      if(response.ok){
        dispatch(setMessage({message:""}))
        dispatch(setSubject({subject:""}))
        setFormError("sent successfuly 🎉")
      }  
      else
        setFormError("something went wrong 🚨")
    }
  }

  let buttonText = ""
  if(url === "")
    buttonText = "Loading ⌛..."
  else if(url !== "" && !cookies.get("access"))
    buttonText = "Authorize 🔒"
  else
    buttonText = "Send Mail 📧"

  const borderColor = cookies.get("access") ? "border-yellow-400":"border-gray-700"

  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:2,type:"spring",stiffness:300}} className="relative z-10 w-full h-screen lg:h-[120vh] text-white">
      <div className="w-full lg:w-1/3 h-1/2 lg:h-screen p-3  flex flex-col items-center justify-center gap-6 lg:gap-8 rounded-xl relative left-[50%] top-[50%] translate-x-[-50%] lg:translate-y-[-60%] translate-y-[-80%]"> 
        <h2 className="text-xl font-semibold text-yellow-400">Mail me a message 🌟</h2>
        <input disabled={!cookies.get("access")} className={`w-full h-14 text-center bg-transparent border-2 ${borderColor} outline-none rounded-md p-2`} placeholder="Subject" type="text" onChange={(e)=>{changeHandler(e,"subject")}} value={subject} />
        <textarea disabled={!cookies.get("access")} className={`text-white w-full h-1/3 text-center bg-transparent border-2 ${borderColor} outline-none rounded-md p-2`} placeholder="Message" onChange={(e)=>{changeHandler(e,"message")}} value={Message} ></textarea>
        <motion.div whileTap={{scale:0.95, transition:{duration:0.5,type:"spring",stiffness:200}}} whileHover={{scale:1.05, transition:{duration:0.5,type:"spring",stiffness:200}}} className="cursor-pointer w-[80%] lg:w-[40%] p-1 h-16 text-center border-2 border-red-500 rounded-md flex items-center justify-evenly" onClick={sendMail}>
            <FaGoogle className="text-yellow-400 h-1/2 w-1/3" />
            <h3 className="text-white w-2/3">{buttonText}</h3>
        </motion.div>
        <label className="text-yellow-400 text-xl">{formError}</label>
        
      </div>

      <div className="w-full h-40 flex items-center justify-center gap-20 mt-24 lg:mt-0">
        <Link href={"https://github.com/VaibhaV-R-N"}><FaGithub className="text-yellow-400 w-12 h-full"/></Link>
        <Link href={"https://www.linkedin.com/in/vaibhav-nayak-07055321a/"}><FaLinkedin className="w-12 text-yellow-400 h-full"/></Link>
        <Link href={"https://www.instagram.com/vaibhav_r_n/"}><FaInstagram className="w-12 text-yellow-400 h-full"/></Link>
      </div>
      
      

    </motion.div>
  )
}

export default Contact