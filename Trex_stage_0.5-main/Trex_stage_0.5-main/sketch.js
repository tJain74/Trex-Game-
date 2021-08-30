var trex, trex_running, edges;
var groundImage; invisibleGround

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;

  invisibleGround= createSprite (250,190,900,20);
  invisibleGround.visible=false;
  ground= createSprite (200,180,900,20);
  ground.addImage(groundImage);
}


function draw(){
  //set background color 
  background("#D9D9D6");
  
  //logging the y position of the trex
  console.log(trex.y)
  ground.velocityX=-3
  //jump when space key is pressed
  if(keyDown("space")&& trex.y>100){
    trex.velocityY = -8;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround)
  drawSprites();
}