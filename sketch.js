//..
var m;
var milkImg;
var dog, dogImage, happyDogImage, database, foodStock;
var food;

var fedTime, lastFed;

function preload(){
  dogImage = loadImage("images/dog.png");
  happyDogImage = loadImage("images/happydog.png");
  milkImg = loadImage("images/Milk.png");
}

function setup(){
  database = firebase.database();
	createCanvas(800,400);
  
  dog = createSprite(650,240);
  dog.addImage(dogImage);
  dog.scale = 0.3; 

  food = new Food();
  food.getFoodStock();
  food.feedDogButton();
  food.addFoodButton();

}

function draw(){
  background(46, 139, 87); 
  
  food.updateFoodStock();
  food.display();
  food.addFoodFunction();
  drawSprites();
  
  lastFed = database.ref('LastFed');
  lastFed.on("value", function (data) {
  fedTime = data.val();
  })

  fill("white");
  textSize(24);
  textAlign(CENTER, TOP);

  //text(" Note: Press Up arrow key to feed Drago Milk.", 0,50,width,50);
  //text("Food remaining: "+ foodStock,0,110,width,50 );
  //text(mouseX + " : " + mouseY, 50,20);

  if(fedTime>=12){
    text("Last Fed: "+ fedTime%12+ " PM" ,130,50);
  }else if(fedTime==0){
    text("Last Fed: 12 AM" ,130,50);
  }else{
    text("Last Fed: "+ fedTime+ " AM" ,130,50);
  }

}

function efg() {
  m = createSprite(261,256);
  m.addImage(milkImg);
  m.scale=0.08;
  m.velocityX = 26;
  m.velocityY = -3;
  m.lifetime = 11;
}


//Pramod Prasad Singh