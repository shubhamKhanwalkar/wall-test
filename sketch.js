var w1,w2,w3,b1,b2,b3;


function setup() {
  createCanvas(1200,400);
  w1 = createSprite(400, 70,5, 50);
  b1 = createSprite(30,70,5,5);
 
  w2 = createSprite(400, 200,5, 50);
 b2 = createSprite(30,200,5,5);

 w3 = createSprite(400,330,5,50);
 b3 = createSprite(30,330,5,5);
}

function draw() {
  background(255,255,255);  
  if(mousePressedOver(b1))
  {
    b1.velocityX = 25;
  }

  if(mousePressedOver(b2))
  {
    b2.velocityX = 25;
  }

  if(mousePressedOver(b3))
  {
    b3.velocityX = 25;
  }
  
  b2.collide(w2);

  b3.bounceOff(w3);

 if (b1.x > 380 && b2.x > 380 && b3.x < 0 ) {
  text ("cannot be used ",100,70);
  text ("can  be used",100,200);
  text ("best",100,330);  

}

drawSprites();
}











