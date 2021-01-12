
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1,rect2,rect3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=createSprite(800,690,1700,20);
	ground.shapeColor=color("yellow");

rect1=createSprite(670,670,150,20);
rect1.shapeColor=color("green");

rect2=createSprite(600,635,25,90);
rect2.shapeColor=color("green");

rect3=createSprite(750,633,25,95);
rect3.shapeColor=color("green");

paper=createSprite(100,665,30,30);
paper.shapeColor=color("red");

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  var options={
	isStatic:false,
	restition:0.3,
	friction:0.5,
	density:1.2
}
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_Arrow){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


