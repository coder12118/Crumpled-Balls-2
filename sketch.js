
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground;
var paper;

function preload()
{
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 380, 800, 20);
	binBase = new Ground(600, 360, 100, 20);
	binLeft = new Ground(520, 295, 20, 150);
  binRight = new Ground(680, 295, 20, 150);
  paper = new Paper(100, 300, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  paper.display();
  binBase.display();
  binLeft.display();
  binRight.display();
  image(dustbinImg, 500, 180, 200, 200);
 
  
  //drawSprites();
}
  function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body, paper.body.position,{x:300, y:-300});
    }
  }
 




