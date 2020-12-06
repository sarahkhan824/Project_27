
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1, ball2,ball3,ball4,ball5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball1 = new Ball(200,0,70);
ball2 = new Ball(270,0,70);
ball3 = new Ball(340,0,70);
ball4 = new Ball(410,0,70);
ball5 = new Ball(480,0,70);
roof = new Roof(200,200,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 

  drawSprites();
  Engine.update(engine);
 
}



