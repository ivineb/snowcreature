let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "Orchid");
let stroke2 = prompt("enter another basic color lowercase", "DeepSkyBlue");

function setup() {
  createCanvas(1000, 800);
  background("#E6E6FA");
  grid = loadImage("images/100px_grid.png"); 
 }

 function draw() {
    //background (grid);

    // snowman legs
    fill("#E0FFFF");
    strokeWeight(10);
    stroke(stroke1);

    // left leg
    ellipse(350, 650, 100);

    // right leg
    ellipse(650, 650, 100);

    // body
    ellipse(500, 450, 350, 400);

    // head
    ellipse(500, 200, 200);

    // eyes
    stroke(stroke2);
    strokeWeight(40);
    point(460, 180);
    point(550, 180);

    // iris
    stroke('#fff');
    strokeWeight(9);
    point(450, 180);
    point(540, 180);

    // mouth
    noFill();
    stroke(color('#483D8B'));
    strokeWeight(10);
    arc(500, 220, 80, 80, 0, HALF_PI);

    // arms
    stroke(stroke2);
    strokeWeight(15);
    line(250, 250, 320, 400);
    line(720, 250, 680, 400);


   // hat
    fill('#4169E1');
    noStroke();
    ellipse(500, 80, 160, 100);

    stroke('#7B68EE');
    strokeWeight(40);
    line(425, 110, 570, 110);

    // tie
    fill('#fae');
    noStroke();
    quad(480, 304, 507, 305, 507, 530, 420, 530);
   
    //house
    fill('#4169E1');
    triangle(158, 300, 50, 400, 250, 400);
    fill('#483D8B');
    rect(50, 400, 203, 180);
    fill('#fae');
    rect(150, 500, 50, 80);


    //snowbaby//

    //body
    stroke(stroke2);
    strokeWeight(10);
    fill("#E0FFFF");
    ellipse(850, 540, 200);

    // head
    ellipse(850, 420, 120);
   
    //legs
    ellipse(800, 650, 50);
    ellipse(900, 650, 50);

    //eyes
    stroke(stroke1);
    strokeWeight(25);
    //left
    point(825, 405);
    //right
    point(880, 405);
    //iris
    stroke('#fff');
    strokeWeight(5);
    point(820, 405);
    point(875, 405);

    //mouth
    noFill();
    stroke(color('#483D8B'));
    strokeWeight(8);
    arc(850, 430, 50, 50, 0, HALF_PI);

    //arms
    stroke(stroke1);
    strokeWeight(12);
    line(750, 480, 720, 450);
    line(950, 480, 970, 450);






   }