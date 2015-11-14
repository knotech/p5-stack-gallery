/**
* slide 1
*/
var bethSketch = function(beth) {
	var r = 6;
	var rVector = 1;
	var r2 = 0;
	var xPos = 0.5;
	var cursorX = 0;
	var cursorY = 0;
	var cursorDiff = [];

	beth.setup = function() {
		/**
		* for setting the width inside of another element.

		var slideWidth = document.getElementById('slide1');
		var computedStyle = getComputedStyle(slideWidth);
		var canvasWidth = parseInt(computedStyle.getPropertyValue('width'), 10);
		*/
		beth.createCanvas(window.innerWidth, 200).parent('slide1').id('canvas1');
	}

	beth.draw = function() {
	 	beth.clear();
	  


		beth.fill(128+(-1*(128/r)),256+(-1*(256/r)),24+(-1*24/r));
		beth.background(Math.random()*r*8,Math.random()*r*8,Math.random()*r*4);
		if (r > 10 || r < 0) {
			rVector *= -1;
		}

		r += rVector*0.5;
		r2 = r;
		// console.log(r, rVector);
		beth.color(256+((255/r)*-1));

		beth.fill(beth.abs(r*20)-r);
		beth.textSize(128);
		beth.textFont('Raleway');
		beth.text("Knotech",window.innerWidth*0.1,144);
		beth.strokeWeight(0);
		beth.fill(248,248,248,128);
		for (var x = (window.innerWidth/172); x < window.innerWidth; x += (window.innerWidth/96)) {
			for (var y = (window.innerHeight/96); y < window.innerHeight;  y += (window.innerHeight/24)) {
				
				beth.ellipse(x, y, r, r);
			}
		}
	}
}

var p5_1 = new p5(bethSketch);