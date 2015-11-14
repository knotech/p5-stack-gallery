var r = 6;
var rVector = 1;
var r2 = 0;
var xPos = 0.5;
var cursorX = 0;
var cursorY = 0;
var cursorDiff = [];

function setup() {
  createCanvas(window.innerWidth,200);
}

function draw() {
  clear();
  


	fill(128+(-1*(128/r)),256+(-1*(256/r)),24+(-1*24/r));
	background(Math.random()*r*2,Math.random()*r*4,Math.random()*r*4);
	if (r > 10 || r < 0) {
		rVector *= -1;
	}

	r += rVector*0.5;
	r2 = r;
	console.log(r, rVector);
	color(256+((255/r)*-1));

	fill(abs(r*20)-r);
	textSize(128);
	textFont('Raleway');
	text("Knotech",window.innerWidth*0.1,144);
	strokeWeight(0);
	fill(248,248,248,128);
	for (var x = (window.innerWidth/172); x < window.innerWidth; x += (window.innerWidth/96)) {
		for (var y = (window.innerHeight/96); y < window.innerHeight;  y += (window.innerHeight/24)) {
			
			ellipse(x, y, r, r);
		}
	}

// 	translate(0,0,0);
// 	fill(0);
// 	sphere(25);
// 	sphere(r,r,r);
// 	fill(Math.abs(64/(r)),Math.abs(254/(r)),Math.abs(24/(r)));
// 	fill(255);
// 	textSize(96);
// 	textFont('Raleway');
// 	text("Web Development",((window.innerWidth*xPos)%(window.innerWidth+window.innerWidth*0.2))-window.innerWidth*0.1,144);
// 	xPos += 0.0005;
}