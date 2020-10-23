
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var treevar, stonevar, groundvar, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var engine, world;
var boyImg, boy;
function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stonevar=new stone(235,420,30); 

	mango1=new mango(1100,200,40);
	mango2=new mango(1170,270,30);
	mango3=new mango(1010,270,40);
	mango4=new mango(1000,170,40);
	mango5=new mango(1100,170,30);
	mango6=new mango(1000,350,30);
	mango7=new mango(900,320,40);
	mango8=new mango(1140,215,40);
	mango9=new mango(1100,295,30);
	mango10=new mango(1200,310,40);
	mango11=new mango(1120,150,30);
	mango12=new mango(900,225,40);

	treevar=new tree(1050,690);
	groundvar = new ground(width/2,690,width,20);
	launcher=new slingshot(stonevar.body,{x:235,y:420})

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  boy = createSprite(343,550,10,10);
  boy.addImage("boy",boyImg);
  boy.scale = 0.2
  

  treevar.display();
  stonevar.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stonevar.display();

  groundvar.display();
  launcher.display();

  drawSprites();
  detectollision(stonevar,mango1);
  detectollision(stonevar,mango2);
  detectollision(stonevar,mango3);
  detectollision(stonevar,mango4);
  detectollision(stonevar,mango5);
  detectollision(stonevar,mango6);
  detectollision(stonevar,mango7);
  detectollision(stonevar,mango8);
  detectollision(stonevar,mango9);
  detectollision(stonevar,mango10);
  detectollision(stonevar,mango11);
  detectollision(stonevar,mango12);
}

function mouseDragged(){
	Matter.Body.setPosition(stonevar.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcher.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stonevar.body, {x:235, y:420}) 
	  launcher.attach(stonevar.body);
	}
  }

  function detectollision(lstone,lmango){
	
  var mangoBodyPosition=lmango.body.position
  var stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
 
  	if(distance<=lmango.radius+lstone.radius){
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  
 
  }

  





