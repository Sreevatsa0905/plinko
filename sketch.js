const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
function setup() {
  
  createCanvas(800,480);

  engine = Engine.create(); 
  world = engine.world;
  
  ground=new Ground(400,460,800,20);
 
  for(var k=0;k<=width;k+=80)
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  for(var j=40;j<=width;j+=50)
  plinkos.push(new Plinko(j,75));
  for(var j=15;j<=width-10;j+=50)
  particles.push(new Particle(j,175));
}

function draw() {
  background("black");  
  Engine.update(engine);
  drawSprites();
  ground.display();
  for(var j=0;j<=particles.length;j++)
  particles[j].display();
  for(var j=0;j<=divisions.length;j++)
  divisions[j].display();
  for(var j=0;j<=plinkos.length;j++)
  plinkos[j].display();

}

