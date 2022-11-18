function preload(){
  
  trexanimation=loadAnimation("trex1.png", "trex3.png", "trex4.png");
  
  groundimg=loadImage("ground2.png");
}

function setup(){
  createCanvas (600,200);
  
  trex=createSprite(50, 180, 50, 50);
  
  trex.addAnimation("animation", trexanimation);
  
  trex.scale = 0.5;

  ground=createSprite(300, 190, 600, 20);
  
  ground.addImage(groundimg);

  ground.velocityX = -4;

}

function draw(){
  
  background("lightgrey");
  
  trex.collide(ground);
  
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if (keyDown("SPACE")){
    trex.velocityY = -6;
  }

  trex.velocityY = trex.velocityY + 0.2;

  

  drawSprites();
}
