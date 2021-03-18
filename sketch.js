const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var paper, paperImg;
var ground;
var right;
var left;
var base;
var middle, middleImg;

function preload() {
  paperImg = loadImage("paper.png");
  middleImg = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 600, 10);
  ground = new Ground(400, 700, 800, 25);

  left = new Dustbin(550, 640, 25, 100);
  right = new Dustbin(670, 640, 25, 100);
  base = new Dustbin(610, 680, 100, 20);
  
  middle = new Dustbin(610, 680, 20, 60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
  
  Engine.update(engine);

  middle.addImage(middleImg);

  paper.display();
  ground.display();
  left.display();
  right.display();
  base.display();
  middle.display();

  drawSprites();
}

function keyPressed(){

  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y: -20});
  }

}