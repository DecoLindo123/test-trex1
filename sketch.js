var trex, trex_running, trex_collided;
var ground, ground_img;

function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
ground_img = loadAnimation("ground2.png")

}
function setup(){
createCanvas(600,200);
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale= 0.5;
trex.x=50;
ground = createSprite(200,180,400,20);
ground.addAnimation("ground2.png",ground_img);
}
function draw(){
background("white");
if(keyDown("space")){
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY+0.8
ground.velocityX = -2;
trex.collide(ground);
drawSprites();
}