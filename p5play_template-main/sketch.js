var box1;

function setup() {
  createCanvas(400,400);
  box1=createSprite(200, 200, 10, 10);
}

function draw() 
{
  background("white");
 
  if(keyDown(RIGHT_ARROW))
  {
      background("blue");
  }
  if(keyDown(LEFT_ARROW))
  {
    background("red")
  }
  if(keyDown(DOWN_ARROW))
  {
    background("yellow")
  }
  if(keyDown(UP_ARROW))
  {
   background("purple")
  }
  drawSprites()
}
