var garden,rabbit;
var gardenImg,rabbitImg;
var apple,grass;
var orangeLeaf,leaf;
var path;
var appleImage,grassImage;
var orangeLeafImage,leafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  orangeLeafImage = loadImage("orangeLeaf.png")
  grassImage = loadImage("grass.png")
  leafImage = loadImage("leaf.png")
  redImage=loadImage("redimage.png")
  }

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);





}



function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
 var fruits=Math.round(random(1,3))
 if (frameCount%80==0)
 {
   if (fruits==1)
   {
    createApples()
   }
   else if (fruits==2)
   {
     createOrange()
   }
   else {
     red()
   }
 }
  
}
function createApples(){
  apple = create(random(50,350),40,10,10);
  apple.scale =0.1
apple.addImage(appleImage)
apple.velocityY=3
apple.lifetime=150
}
function createOrange()
{
  orange = create(random(50,350),40,10,10);
  orange.scale =0.1
orange.addImage(orangeLeafImage)
orange.velocityY=3
orange.lifetime=150
}
function red()
{
  red1 = create(random(50,350),40,10,10);
  red1.scale =0.1
red1.addImage(redImage)
red1.velocityY=3
red1.lifetime=150
}