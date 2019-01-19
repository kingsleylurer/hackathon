

function setup() {
//textFont(font1);
createCanvas(100,500,WEBGL);
   // createCanvas(400, 300, WEBGL);
    textAlign(CENTER);
    textSize(30);

}

var x = 0;

function draw() {
    background(0);
    rainbow();
    ambientLight(50,15,0);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    pointLight(0, 0, 255, width / 2, height / 2, 250);

    push();
    rotateZ(width/2 *0.02);
    rotateX(width/2 *0.02);
    //rotateZ(frameCount * 0.02);
   // rotateX(frameCount * 0.02);
    specularMaterial(250);
    //noFill();
    noStroke(255);
    box(125, 125, 125);
    rotate(45,0,0);
    box(125, 125, 125);
    fill(255);
    pop();




    /*background(0);
    //clear();
    //box(30);
    //cone(40, 100, 100);
    testBox();

    dance();

    fill(255);
    //text('TEST TEST TEST',width/2,height/2);


    console.log('loop');*/
}


var buttonArray = ["1", "2", "3", "4", "5"];

function button() {




}
/* CODE FROM HERE ON DOWN ARE RESPONSIBLE FOR SETTING 2D ASSETS / MENU */
function testBox() {
    colorMode(HSB);
    strokeWeight(3);
   // stroke(rainbowX,255,255);
    fill(rainbowX,255,255);
    //noFill();
    push();
    angleMode(DEGREES);
   // translate(width/2,height/2);
   // rotate(x,x,x);
    //let time = millis();
    //rectMode(CENTER);
    box(30);
    //rect(0,0,50,50);
    //rotateX(time / 1000);
    //rotateZ(time / 1234);

    pop();


}



/* CODE FROM HERE ON DOWN ARE RESPONSIBLE FOR ANIMATIONS */

function dance() {
    if (x < 360)
        x++;
    else
        x = 0;


}

var rainbowBoolean = true;
var rainbowX = 0;
function rainbow() {
    if (rainbowBoolean) {
    if (rainbowX < 255)
        rainbowX++;
    else
        rainbowBoolean = false;
} else {
    if (rainbowX > 0)
        rainbowX--;
    else
        rainbowBoolean = true;
}
}