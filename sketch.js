let c1,c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(0, 178, 221);
  c2 = color(244, 203, 78);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width,y);
  }
}
function draw() {
  //background(220);
// console.log(c2);
fill("#7ea147");
stroke("#678438");
strokeWeight(2);
rect(0, 600, 700, 200);

//centro dei fiori
let x_point = 15;
let y_point = 20;
point(x_point, y_point);

let passo = 1;

//cambiamento
for (let i = 2; i < 11; i +=passo){
  strokeWeight(i * 7);
  if (i % 2 == 0){
    stroke("#fcd767");
  } else {
    stroke("#fff587");
  }
  point(x_point * 4 * i, y_point * 2 * i);
}

//sole
fill("#fcd767");
strokeWeight(0);
circle(50, 0, 250)

//steli
stroke("#678438");
strokeWeight(4);
line (100, 300, 100, 599);
line (290, 260, 290, 599);
line (470, 320, 470, 599);
line (200, 430, 200, 599);
line (390, 470, 390, 599);

//petali 1
strokeWeight(0);
fill("#ffcb81");
triangle(100, 300, 190, 280, 170, 250);
triangle(100, 300, 190, 300, 180, 340);
triangle(100, 300, 130, 385, 170, 360);
triangle(100, 300, 100, 390, 60, 380);
triangle(100, 300, 40, 370, 30, 330);
triangle(100, 300, 20, 310, 25, 280);
triangle(100, 300, 30, 260, 60, 230);
triangle(100, 300, 100, 220, 140, 230);

//petali 2
fill("#ff6f53");
triangle(290, 260, 240, 340, 210, 310);
triangle(290, 260, 200, 280, 210, 240);
triangle(290, 260, 210, 220, 240, 180);
triangle(290, 260, 260, 170, 310, 165);
triangle(290, 260, 340, 180, 360, 220);
triangle(290, 260, 370, 250, 370, 290);
triangle(290, 260, 360, 310, 330, 340);
triangle(290, 260, 310, 350, 270, 350);

//petali 3
fill("#5079ff");
triangle(470, 320, 380, 350, 380, 310);
triangle(470, 320, 380, 290, 400, 250);
triangle(470, 320, 420, 230, 460, 220);
triangle(470, 320, 490, 220, 530, 240);
triangle(470, 320, 545, 275, 555, 320);
triangle(470, 320, 550, 345, 530, 380);
triangle(470, 320, 510, 395, 470, 405);
triangle(470, 320, 440, 400, 400, 380);

//petali 4
fill("#16ffd6");
triangle(200, 430, 220, 360, 250, 380);
triangle(200, 430, 260, 390, 270, 420);
triangle(200, 430, 270, 435, 260, 460);
triangle(200, 430, 250, 470, 220, 490);
triangle(200, 430, 200, 495, 170, 485);
triangle(200, 430, 150, 470, 140, 430);
triangle(200, 430, 145, 410, 160, 380);
triangle(200, 430, 170, 370, 200, 360);

//petali 5
fill("#d8ff9a");
triangle(390, 470, 360, 410, 335, 430);
triangle(390, 470, 380, 400, 410, 400);
triangle(390, 470, 430, 410, 450, 440);
triangle(390, 470, 455, 460, 450, 490);
triangle(390, 470, 440, 505, 420, 525);
triangle(390, 470, 400, 530, 370, 525);
triangle(390, 470, 350, 515, 335, 490);
triangle(390, 470, 330, 480, 330, 450);

//centro del fiore con polline
stroke("#ffdbe4");
strokeWeight(30);
point(100, 300);
point(290, 260);
point(470, 320);
stroke("#ffa8a8");
strokeWeight(23);
point(200, 430);
point(390, 470);
}
