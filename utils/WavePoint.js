class WavePoint{

    constructor(width,reverse){
        this.width = width;
        this.x = reverse?this.width:0;
        this.y = 0;
        this.speed = 3;
        this.wavelength = 200;
        this.amplitude = 20;
        this.SIZE = 50;
        this.pointArray=[];

        this.reverse = reverse ? reverse : false;
    
    }

    update(method){
        if(this.reverse === true){
           if(this.x < 0)
            this.x = this.width

            this.x -= this.speed

            if(method == "sin")
                this.y = this.amplitude * Math.sin( ((2 * Math.PI) * this.x)/this.wavelength);
            else
                this.y = this.amplitude * Math.cos( ((2 * Math.PI) * this.x)/this.wavelength);


        }else{
            if(this.x > this.width)
            this.x = 0;
            
            this.x += this.speed;
            if(method == "sin")
                this.y = this.amplitude * Math.sin( ((2 * Math.PI) * this.x)/this.wavelength);
            else
                this.y = this.amplitude * Math.cos( ((2 * Math.PI) * this.x)/this.wavelength);
        }
        

        if(this.pointArray.length < this.SIZE)
            this.pointArray.push({x:this.x, y:this.y})
        else{
            this.pointArray.splice(0,1);
            this.pointArray.push({x:this.x, y:this.y})
        }
        

    }



}

export default WavePoint;