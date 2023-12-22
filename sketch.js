pelotas = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	print(pelotas);
}
// >>=====> DRAW <=====<<
function draw() {
	background(163, 99, 252);
	for (let i = 0; i < pelotas.length; i++) {
		pelotas[i].update(windowHeight);
		pelotas[i].display();
	}
}

function mousePressed(x, y) {
	let pelota = new Pelota();
	pelotas.push(pelota);
}
