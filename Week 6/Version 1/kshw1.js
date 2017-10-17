function setup() {
  createCanvas(800, 800);
  background(75);
  noStroke();
  noLoop();
}

function draw() {
  //background(75);
  drawCircles();
}

function mousePressed(){
  redraw();
}


function drawCircles() {
  var size = random(100,200); 
  fill(random(0,255), random(0, 255), random(0,255));
  ellipse(mouseX, mouseY, size, size);
  fill(random(0,255), random(0, 255), random(0,255));
  ellipse(mouseX, mouseY, size/1.5, size/1.5);
  fill(random(0,255), random(0, 255), random(0,255));
  ellipse(mouseX, mouseY, size/2, size/2);
  fill(random(0,255), random(0, 255), random(0,255));
  ellipse(mouseX, mouseY, size/4, size/4);




}
