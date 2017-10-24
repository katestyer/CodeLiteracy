# Week 7 Assignment - Brightness Mirror Exploration

I chose the Brightness Mirror sketch to work with for this assignment. I began by commenting out lines to see what changed. I then spent some time trying to understand this part of the nested loop:  

for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      
      
I ended up making a more visual sketch for myself to get it: 

* [rgb][rgb][rgb][][][][][]
* [rgb][rgb][][][][][]
* [][][][]
* [][][][]

This shows to me that for every point on the y, the computer reads the rgb values of each...

### Prerequisites

p5 libraries
