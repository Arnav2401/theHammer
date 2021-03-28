class Ground{
    constructor(x,y){
        var options={
        friction:5,
        density:0.3,
        isStatic:true
        }    
    
    this.body = Bodies.rectangle(x,y,9000,8,options)
    this.width = 9000
    this.height = 8
    World.add(world,this.body)
    }
  display(){
      rectMode(CENTER)
      fill("orange")
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
  }
}