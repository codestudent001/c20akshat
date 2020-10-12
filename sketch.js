var stationary;
var moving;

function setup() {
  createCanvas(800,400);
 stationary =  createSprite(400, 200, 50, 50);
 moving =  createSprite(400, 200, 50, 50);
 stationary.shapeColor = "blue";
 moving.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);
  moving.x = mouseX;
  moving.y=mouseY;

  if(stationary.y - moving.y <= stationary.height/2 + moving.height/2 &&
    moving.y - stationary.y <= moving.height/2 + stationary.height/2 &&
    stationary.x - moving.x <= stationary.width/2 + moving.width/2 &&
    moving.x - stationary.x <= moving.width/2 + stationary.width/2){
    stationary.shapeColor = "green";
    moving.shapeColor = "green";
  }
  else{stationary.shapeColor = "blue";
        moving.shapeColor = "yellow"; 
  }
  drawSprites();
}