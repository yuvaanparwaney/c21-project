var sun,p1,p2,p3,p4,p5,p6,p7,p8,p1q,p2q,p3q,p4q,p5q,p6q,p7q,p8q,options;
var grow = 20;
function setup() {
  createCanvas(800,800);
  p1q = Matter.Body.create(484,472,30,30,options);
  p2q = Matter.Body.create(300,300,30,30,options);
  p3q = Matter.Body.create(450,450,30,30,options);
  p4q = Matter.Body.create(530,530,30,30,options);
  p5q = Matter.Body.create(590,432,30,30,options);
  p6q = Matter.Body.create(100,600,30,30,options);
  p7q = Matter.Body.create(380,432,30,30,options);
  p8q = Matter.Body.create(741,369,30,30,options);
}

function draw() {
  background("black");
  var options = {
    isStatic = true
  }
  
  p1 = ellipse(484,472,30,30);
  p2 = ellipse(300,300,30,30);
  p3 = ellipse(450,450,30,30);
  p4 = ellipse(530,530,30,30);
  p5 = ellipse(590,432,30,30);
  p6 = ellipse(100,600,30,30);
  p7 = ellipse(380,432,30,30);
  p8 = ellipse(741,369,30,30);
  sun = ellipse(400,400,grow);
  if(frameCount%20 === 0){
    grow = grow+5;
  }
  if(frameCount === 0){
    p1q.display();
  }
  if(frameCount === 0){
    p2q.display();
  }
  if(frameCount === 0){
    p3q.display();
  }
  if(frameCount === 0){
    p4q.display();
  }
  if(frameCount === 0){
    p5q.display();
  }
  if(frameCount === 0){
    p6q.display();
  }
  if(frameCount === 0){
    p7q.display();
  }
  if(frameCount === 0){
    p8q.display();
  }
  
}
