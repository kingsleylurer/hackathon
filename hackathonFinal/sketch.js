

/*var img;

function preload() {
    //
    img = loadImage("dvd.png");
}*/
var img;


function setup() {
    createCanvas(310,50);
    img = loadImage("background.jpg");
    textSize(30);
    textAlign(CENTER);
}
let angle = 0;


var advertisement = ["ADVERTISEMENT 1","ADVERTISEMENT 2", "ADVERTISEMENT 3", "ADVERTISEMENT 4"];
var hyperlinkStorage = ["https://www.google.com/","https://www.amazon.com/","https://dogecoin.com/","https://www.coinbase.com/"];


var x = 0;


function draw() {
    translate()
    background(255,60,60);


    fill(255);


push();
  //  text(advertisementX, width/2, height/2+10);
    translate(-advertisementY,0);
   // image(img, width, height);
    text(advertisement[x%4], width/2, height/2+10);
    push();
    translate((width),0);
   // image(img, width, height);
    text(advertisement[(x+1)%4], width/2, height/2+10);
    pop();
pop();
    advertisementSlideShow();
    advertisementAnimation();
   // clear();
hideAnimation();
}


var advertisementX = 300;
function advertisementSlideShow() {
    //if (x>3)
    // x%=advertisement.length;

   //if (advertisementA == false) {
    if (advertisementX > 0) {
        advertisementX--; }
    else {
    advertisementA = true;
    }//}
}

var advertisementY = 0;
var advertisementA = false;
function advertisementAnimation() {
    if (advertisementA)  {
        if (advertisementY < width)
            advertisementY+=10;
        else {
            advertisementX = 300;
            x++;
            advertisementY = 0;
            advertisementA = false;
             }

    }


}

var hideMyAss = 0;
function hideAnimation() {


}

function mouseClicked() {
    if (mouseX< width && mouseX> 0 && mouseY < height && mouseY > 0) {
        window.open(hyperlinkStorage[x]);
        resizeCanvas(0,0);
    } else
    if (mouseX> width+20 && mouseX< -20 && mouseY > height+20 && mouseY < -500) {
        resizeCanvas(0,0);
    } else
    resizeCanvas(310,50);
}

function windowResized() {

}
