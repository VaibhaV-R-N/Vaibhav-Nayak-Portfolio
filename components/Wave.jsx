'use client'
import { useEffect } from "react"
import { useRef } from "react"
import WavePoint from "@/utils/WavePoint";


function Wave() {
  
  const waveRef = useRef(null);

  useEffect(()=>{
    const canvs = waveRef.current;
    const width = canvs.clientWidth;
    const height = canvs.clientHeight;
    canvs.width = width;
    canvs.height = height;
    const context = canvs.getContext('2d');

    const wavePoint = new WavePoint(width);
    const wavePointTwo = new WavePoint(width);

    const reverseWave = new WavePoint(width,true);
    const reverseTwo = new WavePoint(width,true);

    const waveHandler =(wave,color)=>{
      
      let pointArray = wave.pointArray
      
      pointArray.forEach((obj)=>{
   
        context.fillStyle = color;
        context.beginPath()
        context.arc(obj.x,((height*2.5)/3)+obj.y,3,0,2*Math.PI)
        context.fill()

    })

    }

    const animate = ()=>{
        context.clearRect(0,0,width,height);
        
        waveHandler(wavePoint,"rgb(255,0,0)");
        waveHandler(wavePointTwo,"rgb(255,255,0)");

        waveHandler(reverseWave,"rgb(255,0,0)");
        waveHandler(reverseTwo,"rgb(255,255,0)");
        
        wavePoint.update("sin");
        wavePointTwo.update("cos");

        reverseWave.update("sin");
        reverseTwo.update("cos");

        requestAnimationFrame(animate);
    }

    animate();

  },[])

  return (
    <div className="w-full h-full absolute ">
        <canvas className="w-full h-full " ref={waveRef} width={500} height={500}></canvas>
    </div>
  )
}

export default Wave