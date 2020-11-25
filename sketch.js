var hr,mn,sc;
var hrangle,mnangle,scangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();

  scangle=map(sc,0,60,0,360);
  mnangle=map(mn,0,60,0,360);
  hrangle=map(hr%12,0,12,0,360);

  push();
  rotate(scangle);
  stroke("red");
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnangle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrangle);
  stroke("blue");
  strokeWeight(10);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke("red")
  arc(0,0,300,300,0,scangle)

  stroke("green")
  arc(0,0,280,280,0,mnangle)

  stroke("blue")
  arc(0,0,260,260,0,hrangle)
}