float thetaX = 0;     // Initial angles of rotation        
float thetaY = 0;
float thetaZ = 0;
float speed = 0.01;   // Rotation speed
float t = 100;        // Cube size 

void setup() {
  size(600, 600, P3D);
	smooth();
}

void draw() {
  background(255);
  rectMode(CENTER);
	noStroke();

  // Save the transformation state
  pushMatrix();

  translate(width/2, height/2, 0);

  rotateX(thetaX);
  rotateY(thetaY);
  rotateZ(thetaZ);

  // Draw the sides of the cube and apply color
  beginShape(QUADS);
  // front side
  fill(#E83F6F);
  vertex(-t, -t, 0);
  vertex(t, -t, 0);
  vertex(t, t, 0);
  vertex(-t, t, 0);

  // right side
  fill(#F47F38);
  vertex(t, -t, 0);
  vertex(t, -t, -2*t);
  vertex(t, t, -2*t);
  vertex(t, t, 0);

  // back side
  fill(#FFBF00);
  vertex(t, -t, -2*t);
  vertex(t, t, -2*t);
  vertex(-t, t, -2*t);
  vertex(-t, -t, -2*t);

  // left side
  fill(#855A8A);
  vertex(-t, -t, -2*t);
  vertex(-t, t, -2*t);
  vertex(-t, t, 0);
  vertex(-t, -t, 0);

  // bottom side
  fill(#2274A5);
  vertex(-t, t, 0);
  vertex(t, t, 0);
  vertex(t, t, -2*t);
  vertex(-t, t, -2*t);

  // top side
  fill(#32936F);
  vertex(-t, -t, 0);
  vertex(t, -t, 0);
  vertex(t, -t, -2*t);
  vertex(-t, -t, -2*t);
  endShape();

  // Resore the transformation state
  popMatrix();

  thetaX = map(mouseX, 0, width, 0, TWO_PI);
  thetaY = map(mouseY, 0, height, 0, TWO_PI);
  thetaZ = map((mouseX+mouseY)/2, 0, (width+height)/2, 0, TWO_PI);
}
