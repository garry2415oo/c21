var fixedRect, movingRect,fixedRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  fixedRect2 = createSprite(500, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  
  fixedRect3 = createSprite(300, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  
  fixedRect4 = createSprite(200, 400, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouch(movingRect,fixedRect2)
  isTouch(movingRect,fixedRect)
  isTouch(movingRect,fixedRect3)
  isTouch(movingRect,fixedRect4)

  
  
  
  drawSprites();
}



  
