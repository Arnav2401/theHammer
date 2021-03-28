const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World 
 var engine 
 var world 


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create()
    world = engine.world
    hammer = new Hammer(300,200)
    rubber = new Rubber (100,565)
    iron = new Iron(250,575)
    stone = new Stone(400,560)
    ground = new Ground (60,595)


}

function draw(){
    background(0);
   Engine.update(engine) 
   hammer.display()
   rubber.display()
   iron.display()
   stone.display()
   ground.display()
 
}