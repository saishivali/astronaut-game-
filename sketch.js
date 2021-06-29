   var sleep
   var bath
   var brush
   var drink
   var eat
   var gym
   var bg,bgImg
   var move
   var astronaut
   function preload(){
   bgImg=loadImage("iss.png")
   bath=loadAnimation("bath1.png")
   brush=loadAnimation("brush.png")
   drink=loadAnimation("drink1.png")
   eat=loadAnimation("eat1.png")
   gym=loadAnimation("gym1.png","gym11.png","gym12.png","gym2.png")
   sleep=loadAnimation("sleep.png")
   move=loadAnimation("move.png","move1.png")
   }
   function setup() {
    createCanvas(1000,600);
    bg=createSprite(200, 200, 50, 50);
    bg.addImage(bgImg)
    bg.scale=0.1
    astronaut=createSprite(200,200,20,20)
  }

function draw() {
  background(255,255,255);  
  Edges=createSprite()
  astronaut.bounceOff(Edges)
  if(keyDown("UP_ARROW")){
  
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.valocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.valocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.valocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.valocityY=0
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.valocityY=0
  }
  
  
  drawSprites();
}