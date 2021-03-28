class Hammer{
  constructor(x,y){
  var options={
    density:3,
    friction:0.3,
    restiution:0.3

  }
   this.body = Bodies.rectangle(x,y,10,50,options)
   this.width = 10
   this.height = 50
   World.add(world,this.body)

  }
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    pos.x= mouseX
    pos.y = mouseY
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill("red")
    rect(0,0,this.width,this.height)
    pop()
  }
}