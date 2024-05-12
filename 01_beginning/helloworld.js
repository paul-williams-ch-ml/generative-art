function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
 
  let x = 400 * noise(0.1 * frameCount);
  let y = 400 * noise(0.1 * frameCount + 10000);

  noStroke();
  fill(random(255), random(255), random(255), 30);

  size = 2 + (8 * random(10));
  ellipse(x, y, size, size);
}
