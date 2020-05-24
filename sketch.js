var sun,p1,p2,p3,p4,p5,p6,p7,p8;
var grow = 20;
function setup() {
  createCanvas(800,800);
}

function draw() {
  background("black");
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
}
