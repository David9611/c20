var bgImg
var cat, catimg1, catimg2;
var mouse, mouseimg1, mouseimg2;

function preload() {
    //load the images here
bgImg = loadImage("garden.png")
catimg1 = loadAnimation("images/cat1.png")
catimg2 = loadAnimation("images/cat2.png", "images/cat3.png")
catimg3 = loadAnimation("images/cat4.png")
mouseimg1 = loadAnimation("images/mouse1.png")
mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseimg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

cat = createSprite(870, 600)
cat.addAnimation("catSleeping", "catimg1")
cat.scale = 0.2

mouse = createSprite(200,600)
mouse.addAnimation("mouseSleeping", "mouseimg1")
mouse.scale = 0.15

}

function draw() {
background(bgImg)
    background(255);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2){

cat.velocityX = 0
cat.addAnimation("catFinalImg", catimg3)
cat.x = 300
cat.scale = 0.2
cat.changeAnimation("catFinalImg")

mouse.addAnimation("mouseFinalImg", mouseimg3)
mouse.scale = 0.15
mouse.changeAnimation("mouseFinalImg")

}
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
cat.velocityX = -5
cat.addAnimation("catRunning", catimg2 )
cat.changeAnimation("catRunning")

}

if(keyCode === RIGHT_ARROW){
mouse.addAnimation("mouseRunning", mouseimg2)
mouse.frameDelay = 25;
mouse.changeAnimation("mouseRunning")

}

}
