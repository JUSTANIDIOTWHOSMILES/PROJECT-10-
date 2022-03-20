var sea_ship, sea_ship_animation;
var sea, sea_img;

function preload(){

  sea_ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_img = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(200,200);
sea.addImage(sea_img);
sea.x = sea.width/2;
sea.velocityX +=4;

sea_ship = createSprite(200,200);
sea_ship.addAnimation("moving", sea_ship_animation);
sea_ship.scale = 0.4;


}

function draw() {
  background("blue");

  drawSprites();
 

  if(sea.x>0){

    sea.x = sea.width/2;
  }
}