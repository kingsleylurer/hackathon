

/*var img;

function preload() {
    //
    img = loadImage("dvd.png");
}*/
//var img;


function setup() {
    img = loadImage("background.jpg");
    createCanvas(310,50);
    textSize(30);
    textAlign(CENTER);
}
let angle = 0;

function draw() {
    background(0);
    theButtons();

noStroke();
fill(255);
    rect(5,50,300,300);

    fill(255);
    text("JS STUFF HERE", width/2, height/2+10);


push();
    ambientLight(50);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, width/2, height/2, 250);

    rectMode(CENTER);
    fill(0,0,255);
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    //rect(0, 0, 150, 150);
    specularMaterial(250);
    box(20,20,20);


    angle += 0.01;
    if (angle>100)
        angle=0;
    pop();

}

function theButtons() {
    strokeWeight(3);
    stroke(255);
    noFill();
   // rect(10,10,100,30);
   // rect(120,10,100,30);

}