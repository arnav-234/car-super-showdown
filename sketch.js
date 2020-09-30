var car1
//var car2
//var car3
//var car4
var wall
//var wall1
//var wall2
//var wall3

var speed
var weight
var deformation=0;

function setup() {
    createCanvas(1600,400);
 car= createSprite(0, 100, 20, 20);
// car2= createSprite(1600, 200, 20, 20);
// car3= createSprite(1600, 300, 20, 20);
// car4= createSprite(1600, 400, 20, 20);
 wall=createSprite(1400,150,30,1600)
 //wall1=createSprite(1600,150,30,1600)
 //wall2=createSprite(1600,150,30,1600)
 speed=random(55,90)
 weight=random(400,1500)
 
}

function draw() {
   car.velocityX=speed;
   background(0); 
   //deformation = 0.5*weight*speed*speed/22500;  
   if(wall.x-car.x<(car.width+wall.width)/2)
   {
    car.velocityX=0;
    deformation =  0.5*weight*speed*speed/22500;
   }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  if(deformation>100 && deformation<180)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  drawSprites();
  }
  
  




  
