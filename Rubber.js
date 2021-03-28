class Rubber{
    constructor(x,y){
var options={
    friction:5,
    restitution:0.6,
    density:0.1,
    

}
this.body = Bodies.circle(x,y,20,options)
this.radius=20
World.add(world,this.body)
    }
display(){
    var pos = this.body.position
    ellipseMode(RADIUS)
    fill("green")
    ellipse(pos.x,pos.y,this.radius)

}



}