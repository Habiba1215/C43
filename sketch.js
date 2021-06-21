var mn,sec,hr


function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
  

}

function draw() {
  background(255,255,255);  

  translate(200,200)
  rotate(-90);

  mn = minute()
  sec = second()
  hr = hour()

  secAngle = map(sec,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr %12,0,12,0,360);
  
  push()
  stroke("blue")
  strokeWeight(10)
  rotate(secAngle)
  line(0,0,100,0)
  pop()

  push()
  stroke("red")
  strokeWeight(10)
  rotate(mnAngle)
  line(0,0,75,0)
  pop();

  push();
  stroke("green")
  strokeWeight(10)
  rotate(hrAngle)
  line(0,0,50,0)
  pop();


  point(0,0)
  noFill()
  strokeWeight(10)

  
  stroke("blue")
  arc(0,0,300,300,0,secAngle)

  stroke("red")
  arc(0,0,280,280,0,mnAngle)

  stroke("green")
  arc(0,0,260,260,0,hrAngle)






  drawSprites();

}