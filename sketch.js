
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, ground, stone, slingshot;
var boy, boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13;
var world,boy;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1366, 653);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1100,350);
	ground = new Ground(683,height,1366,20);
	stone = new Stone(200,100,30);
	mango1 = new Mango(1000,190,20);
	mango2 = new Mango(1140,190,20);
	mango3 = new Mango(1120,100,20);
	mango4 = new Mango(1250,250,20);
	mango5 = new Mango(1030,270,20);
	mango6 = new Mango(950,300,20);
	mango7 = new Mango(1100,300,20);	
	mango8 = new Mango(1300,300,20);
	mango9 = new Mango(910,230,20);
	mango10 = new Mango(1230,180,20);
	mango11 = new Mango(1080,220,20);
	mango12 = new Mango(1040,130,20);
	mango13 = new Mango(1180,270,20);

	slingshot = new Slingshot(stone.body,{x:235,y:420});
	Engine.run(engine);
  
}


function draw() {
  background("gray");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boyImg ,200,340,200,300);

  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  slingshot.display();
  
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  detectollision(stone,mango13);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420}) 
        slingshot.attach(stone.body);
    } 
}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

