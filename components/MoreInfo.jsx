import React from 'react'
import ContentWrapper from './ContentWrapper'
import Content from './Content'

export default function MoreInfo() {
  return (
    <div className=' relative z-10 w-full h-auto p-2 flex flex-col items-center justify-center gap-10'>
        <ContentWrapper title={"My linux rices so far... 🐧"}>
            <Content big source={"/linuxrice/Arch + DWM.png"} title={"Arch Linux + DWM"}/>
            <Content source={"/linuxrice/Arch + KDE.jpg"} title={"Arch Linux + KDE"}/>
            <Content source={"/linuxrice/Arch + KDE2.png"} title={"Arch Linux + KDE"}/>
            <Content source={"/linuxrice/Arch + KDE3.png"} title={"Arch Linux + KDE"}/>
        </ContentWrapper>
        
        <ContentWrapper title={"My Favourite Animes/WebSeries/TVseries 🎬🍿"}>
            <Content source={"/anime/gintama.gif"} title={"Gintama"}/>
            <Content source={"/anime/noragami.gif"} title={"Noragami"}/>
            <Content source={"/anime/erased.gif"} title={"Erased"}/>
            <Content source={"/anime/mrrobot.gif"} title={"Mr. Robot"}/>
        </ContentWrapper>

        <ContentWrapper title={"Currently listening to... 🎵 "}>
        <iframe style={{borderRadius:"12px"}} className='w-full lg:w-1/4' src="https://open.spotify.com/embed/track/2jdbZGFp8KVTuk0YxDNL4l?utm_source=generator"  height="152"  allow=" fullscreen;" loading="lazy"></iframe>
        </ContentWrapper>
    </div>
  )
}
