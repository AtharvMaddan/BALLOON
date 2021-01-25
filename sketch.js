var balloon
var backgroundImg,balloonAni
function setup() {
  createCanvas(500,500);
 balloon= createSprite(400, 200, 50, 50);
}
function preload(){
  backgroundImg = loadImage("Hot Air Ballon-01.png")
  balloonAni = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}
function draw() {
  background(backgroundImg);
  balloonAnimation(balloonAni)
 
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
  }
 else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10
  }
  drawSprites();

}