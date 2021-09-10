
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var boyImg;

function preload()
{
	boyImg = loadImage('./images/boy.png')
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree();
	ground = new Ground(width/2,height,width,20);
	mango1 = new Mango(200,200);

	stone = new Stone(10,10);

	chain = new Chain(stone.body,{x:445,y:550})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  imageMode(CENTER);
  image(boyImg, 75,550,150,500)

  tree.display()
  ground.display()
  mango1.display()
  stone.display()

  detectCollision(stone, mango1);
  chain.display()
  drawSprites();
 
}


function detectCollision(lstone,lmango){
	mangoBodyPosition= lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if (distance<= lmango.r+lstone.r)
	{
		Body.setStatic(lmango.body, false)
	}


}

function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX, y : mouseY})
}

function mouseReleased(){
	chain.fly()
}

