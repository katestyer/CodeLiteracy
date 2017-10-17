function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  noLoop();
}

function draw() {
  //background(0);
  drawCircles();
}

function mousePressed(){
  //background(0);
  redraw();
}


function drawCircles() {
  var size = random(50,200); 
  var rings = random(5,8);
  for (var i = 0; i < rings; i++) {
    fill(random(0,255), random(0, 255), random(0,255));
    ellipse(mouseX, mouseY, size - i*(size/rings), size - i*(size/rings));
  }
}
  
