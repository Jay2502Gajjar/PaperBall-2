
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var base;
var pillar1 , pillar2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   


	ground = new Ground(500,500,1200,10);

	paperball = new ball(100, 300, 70);

	base = new base1 (585,490,150,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ground.display();
  paperball.display();
  base.display();
 

  drawSprites();
  keyPressed();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) 
	   {
	   Matter.Body.applyForce( paperball.body, paperball.body.position, {x:4, y:-39});
	 }

	}