import { useEffect,useRef } from "react"

class Beam{
    constructor(width,height){
        this.w = Math.floor(Math.random()*20)+30,
        this.x = Math.floor(Math.random()*(width-10)) + 5
        this.y = Math.floor(Math.random()*(height-10)) + 5
        this.speed = Math.random() * 1 + 0.1
        this.fill= ["rgba(255,255,0,0.3)","rgba(255,255,255,0.3)"][Math.floor(Math.random()*2)]
        // this.emoji = ["🌞","⚙️","🛰️","🎵","🌍"][Math.floor(Math.random()*5)]
        
    }
}

class BeamManager{
    constructor(ctx,width,height){
        this.ctx = ctx
        this.width = width,
        this.height = height
        this.beams = []
    }

    generate(num){
        for(let i = 0;i<num;i++){
            this.beams.push(new Beam(this.width,this.height))
        }
    }

    updateBeams(){
        this.beams = this.beams.map(beam=>{
            if(beam.x > this.width){
                beam.x = 0
                beam.y += (1 * Math.sin( ((2 * Math.PI) * beam.x)/100))
            }else{
                beam.x += beam.speed
                beam.y += (1 * Math.sin( ((2 * Math.PI) * beam.x)/100))
            }

            return beam
        })
    }

    drawBeams(){
        this.beams.forEach(beam=>{
            this.ctx.fillStyle = beam.fill
            this.ctx.beginPath()
            this.ctx.arc(beam.x,beam.y,beam.w,0,2*Math.PI)
            this.ctx.fill()
            // this.ctx.font = `30px Arial`;
            // this.ctx.fillText(beam.emoji,beam.x,beam.y,30)
          
        })
    }


}

export default function HeroCanvas() {
    const canvasRef = useRef(null)
    useEffect(()=>{
        const canvas = canvasRef.current
        const width = canvas.clientWidth
        const height = canvas.clientHeight
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        const manager = new BeamManager(ctx,width,height)
        manager.generate(20)
        const animate = ()=>{
            ctx.clearRect(0,0,width,height)

            manager.drawBeams()
            manager.updateBeams()
            requestAnimationFrame(animate)
        }

        animate()

    },[])

    return (
        <canvas className="absolute z=10 w-full h-full" ref={canvasRef}></canvas>
    )
}
