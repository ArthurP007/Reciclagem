class Paper {
      constructor(x,y,r){
         var options = {
             isStatic: false,
             restitution:0.3,
             friction:0,
             density:1.2
         }
         this.r = r
         this.body = Bodies.circle(x,y,(this.r-20)/2,options)
          World.add(world,this.body)
         this.image = loadImage("paper.png")
        
      }
      display(){

        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
         

      }


}