var video;

var vScale = 17;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  //capture.hide();
}

function draw() {
  background(0);

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      var w = map(bright, 0, 255, 0, vScale);
      

      noStroke();
      //fill(255);
      fill(random(255), random(255), random(255));
      rectMode(CENTER);
      ellipse(x*vScale, y*vScale, w, w);

    }
  }
 
}


/*
* [rgb][rgb][rgb][][][][][]
* [rgb][rgb][][][][][]
* [][][][]
* [][][][]
*/
