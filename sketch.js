var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fairyimage=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(600, 600);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy=createSprite(130,200)
	fairy.addAnimation("flyingfairy",fairyimage)
	fairy.scale=0.5;


	star = createSprite(200,30);
	star.addImage(starImg);
	star.scale = 1;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(250 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
if(star.y>30&&star.Body.position.y>30){
	Matter.Body.setStatic(starBody,false)
}

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {
	if(keyCode===RIGHT_ARROW) {
	fairy.x=fairy.x+20
	}
	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-20
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
