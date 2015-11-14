/**
* slide 0
*/
var alephSketch = function(aleph) {
	var r = 6;
	var rVector = 1;
	var r2 = 0;
	var xPos = 0.5;
	var cursorX = 0;
	var cursorY = 0;
	var cursorDiff = [];

	aleph.setup  = function() {
		/**
		* for setting the width inside of another element.

		var slideWidth = document.getElementById('slide1');
		var computedStyle = getComputedStyle(slideWidth);
		var canvasWidth = parseInt(computedStyle.getPropertyValue('width'), 10);
		*/
		aleph.createCanvas(window.innerWidth, 200).parent('slide0').id('canvas0');
	}

	aleph.draw = function() {
		aleph.clear();
	  


		aleph.fill(128+(-1*(128/r)),256+(-1*(256/r)),24+(-1*24/r));
		aleph.background(Math.random()*r*2,Math.random()*r*4,Math.random()*r*4);
		if (r > 10 || r < 0) {
			rVector *= -1;
		}

		r += rVector*0.5;
		r2 = r;
		// console.log(r, rVector);
		aleph.color(256+((255/r)*-1));

		aleph.fill(aleph.abs(r*20)-r);
		aleph.textSize(128);
		aleph.textFont('Raleway');
		aleph.text("Knotech",window.innerWidth*0.1,144);
		aleph.strokeWeight(0);
		aleph.fill(248,248,248,128);
		for (var x = (window.innerWidth/172); x < window.innerWidth; x += (window.innerWidth/96)) {
			for (var y = (window.innerHeight/96); y < window.innerHeight;  y += (window.innerHeight/24)) {
				
				aleph.ellipse(x, y, r, r);
			}
		}
	}
}

var p5_0 = new p5(alephSketch);