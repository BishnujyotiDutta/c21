
var wall, car;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  car = createSprite(200, 400,30,30);
  car.shapeColor = "green";
  car.velocityX=4

  wall = createSprite(800, 400, 50, 100);
  wall.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  


  if(isTouching(car,wall)){
    car.shapeColor = "blue";
    wall.shapeColor = "blue";
  }
  
  else {
    car.shapeColor = "green";
  
    wall.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



