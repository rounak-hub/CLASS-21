var movingrect,fixedrect;
var object1,object2,object3;
function setup() {
  createCanvas(1000,400);
  
  movingrect=createSprite(400, 100, 50, 50);
  movingrect.shapeColor="black";
  fixedrect=createSprite(200,100,50,50);
  fixedrect.shapeColor="red";
  object1=createSprite(100,100,50,50);
  object1.shapeColor="green";
  object2=createSprite(300,100,50,50);
  object2.shapeColor="yellow";
  object3=createSprite(600,100,50,50);
  object3.shapeColor="blue";

}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

if (istouching(movingrect,object1)){
movingrect.shapeColor="purple";
//object1.shapeColor="purple";
}
else if (istouching(movingrect,object3)){
  movingrect.shapeColor="purple";
  //object3.shapeColor="purple";
  console.log("hello");
}
else if (istouching(movingrect,fixedrect)){
  movingrect.shapeColor="purple";
  //fixedrect.shapeColor="purple";
}
else{
 //object2.shapeColor="purple";
movingrect.shapeColor="purple";
}
 
  drawSprites();
}
