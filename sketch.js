let spaceBg
let iss,issImg
let spacecraft,spacecraftUp,spacecraftLeft,spacecraftRight
let spacecraftImg,spacecraftUpImg,spacecraftLeftImg,spacecraftRightImg;
let dock

function preload () {

  spaceBg = loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spacecraftImg = loadImage("spacecraft1.png");
  spacecraftUpImg = loadImage("spacecraft2.png");
  spacecraftLeftImg = loadImage("spacecraft3.png");
  spacecraftRightImg = loadImage("spacecraft4.png");
  
}

function setup() {
  createCanvas(800,600);

  

  spacecraft = createSprite(500,500,10,10);
  spacecraft.addImage('craft',spacecraftImg);
  spacecraft.addImage('up/down',spacecraftUpImg);
  spacecraft.addImage('left',spacecraftLeftImg);
  spacecraft.addImage('right',spacecraftRightImg);
  spacecraft.scale = 0.3;

  iss = createSprite(400,300,10,10);
  iss.addImage('iss',issImg);
  iss.scale = 0.9;

  dock = createSprite(345,330,15,10)
  dock.visible = false;
}
function draw() {
  background(spaceBg);  

  spacecraft.changeAnimation("craft")
if(keyDown(RIGHT_ARROW)){
  spacecraft.position.x +=5
  spacecraft.changeAnimation('right');
}

if(keyDown(LEFT_ARROW)){
  spacecraft.position.x -=5;
  spacecraft.changeAnimation('left');
}

if(keyDown(UP_ARROW)){

  spacecraft.position.y -=5
  spacecraft.changeAnimation('up/down');
}

if(keyDown(DOWN_ARROW)){

  spacecraft.position.y +=5
  spacecraft.changeAnimation('up/down');
}

if(spacecraft.isTouching(dock)){
  textSize(20);
  fill("blue")
  text("You docked the spacecraft!",300,500);
 spacecraft.position.x = 345;
 spacecraft.position.y = 380;
}

  drawSprites();
}