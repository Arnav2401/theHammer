class Iron{
    constructor(x,y){
var options={
    restitution:0.3,
    density:0.6,
    friction:3,
   
}
this.body = Bodies.rectangle(x,y,50,20,options)
this.width= 50
this.height = 20
World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
     rectMode(CENTER)
     fill("lightblue")
    rect(pos.x,pos.y,this.width,this.height)
    
    }

}