var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftBody,leftSprite;
var rightBody,rightSprite;
var bottomBody,bottomSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	leftSprite=createSprite(300,610,20,100);
	leftSprite.shapeColor="red";
	leftBody=Bodies.rectangle(320,610,20,100,{isStatic:true});
	World.add(world,leftBody);
	rightSprite=createSprite(500,610,20,100);
	rightSprite.shapeColor="red";
	rightBody=Bodies.rectangle(480,610,20,100,{isStatic:true});
	World.add(world,rightBody);
	bottomSprite=createSprite(400,670,200,20);
	bottomSprite.shapeColor="red";
	bottomBody=Bodies.rectangle(400,670,200,20,{isStatic:true});
	World.add(world,bottomBody);



	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
    
  }
}



