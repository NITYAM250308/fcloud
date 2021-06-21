var ground,groungImg
var angel,angelImg;


function preload(){
  groundImg=loadImage("backGround.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(360,400)
  ground.addImage(groundImg);
  ground.scale=0.45
 
}

function draw() {
  background(255);
 
  
  drawSprites();
}

