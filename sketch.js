var b1,b2,b3;
var w1,w2,w3,b_speed,b_speed1,b_speed2;
var  b_weight1,b_weight2,b_weight3;
var thickness1,thickness2,thickness3;

function setup() {
  createCanvas(1200,400);
  thickness1 = random (22,83);
  thickness2 = random (22,83);
  thickness3 = random (22,83);
  b1 = createSprite(20, 70, 20, 20);
  b2 = createSprite(20, 200, 20, 20);
  b3 = createSprite(20, 330, 20, 20);
  w1 = createSprite(1200,70,thickness1,50);
  w2 = createSprite(1200,200,thickness2,50);
  w3 = createSprite(1200,330,thickness3,50);
  b_speed1 = random (223,321);
  b_speed2 = random (223,321);
  b_speed = random (223,321);

  b_weight = random (30,52);
  b_weight1 = random (30,52);
  b_weight2 = random (30,52);
  

}

function draw() {
  background(255,255,255);  
  drawSprites()
 
  if (mousePressedOver(b1)) {
    b1.velocityX = b_speed;
  }
  if (mousePressedOver(b2)) {
    b2.velocityX = b_speed1 ;
  }
  if (mousePressedOver(b3)) {
    b3.velocityX =  b_speed2;
  }

 
 
  
 
  if (Collide (b1,w1)){
    var damage = 0.5 * b_weight * b_speed * b_speed / (thickness1*thickness1*thickness1);
    if (damage>10) {
      w1.shapeColor = color (255,0,0);
      b1.velocityX = 0;  
    }
    if (damage<10) {
      w1.shapeColor = color (0,255,0);
    }
    }

if (Collide (b2,w2)){
var damage = 0.5 * b_weight1 * b_speed1 * b_speed1 / (thickness2*thickness2*thickness2);
if (damage>10) {
  w2.shapeColor = color (255,0,0);
}
if (damage<10) {
  w2.shapeColor = color (0,255,0);
  b2.velocityX = 0;  
}
}



  if (Collide (b3,w3)){
    var damage = 0.5 * b_weight2 * b_speed2* b_speed2 / (thickness3*thickness3*thickness3);
    if (damage>10) {
      w3.shapeColor = color (255,0,0);
    }
    if (damage<10) {
      w3.shapeColor = color (0,255,0);
      b3.velocityX = 0;  
    }
    }
  }