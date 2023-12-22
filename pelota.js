let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    pelotas.push(new Pelota());
  }
}

function draw() {
  background(220);

  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(height);
    pelotas[i].display();
  }
}

class Pelota {
  constructor() {
    this.posX = random(50, windowWidth - 50);
    this.posY = random(10, 130);
    this.velX = random(-20, 20);
    this.velY = 0.0;
    this.acelY = 0.98;
    this.diam = int(random(5, 50));
    this.rad = this.diam / 2;
    this.isCircle = true;
    this.colorin = this.generateRandomColor();
  }

  update(_piso) {
    if (this.posY + this.rad <= _piso) {
      this.velY += this.acelY;
      this.posY += this.velY;
    } else {
      this.velY *= -1.0;
      this.posY += this.velY;
      this.colorin = this.generateRandomColor();
      this.isCircle = !this.isCircle;
    }

    if (this.posX > windowWidth) {
      this.velX *= -1;
    }
    if (this.posX < 0) {
      this.velX *= -1;
    }
    this.posX += this.velX;
  }

  display() {
    fill(this.colorin);
    if (this.isCircle) {
      ellipse(this.posX, this.posY, this.diam);
    } else {
      rect(this.posX - this.rad, this.posY - this.rad, this.diam, this.diam);
    }
  }

  generateRandomColor() {
    return color(20, random(100, 255), random(0, 150));
  }
}