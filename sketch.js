var redBox, blueBox, yellowBox, purpleBox, orangeBox, greenBox, blackBox, whiteBox;
var pointer;
var database, position;
var gameState;


function setup() {
  createCanvas(800,600);
  background("pink");

  gameState = 1;

  pointer = createSprite(0, 0, 5, 5);

  redBox = createSprite(50,40,20,20);
  redBox.shapeColor = "red";

  yellowBox = createSprite(150,40,20,20);
  yellowBox.shapeColor = "yellow";

  blueBox = createSprite(250,40,20,20);
  blueBox.shapeColor = "blue";

  purpleBox = createSprite(350,40,20,20);
  purpleBox.shapeColor = "purple";

  orangeBox = createSprite(450,40,20,20);
  orangeBox.shapeColor = "orange";

  greenBox = createSprite(550,40,20,20);
  greenBox.shapeColor = "green";

  blackBox = createSprite(650,40,20,20);
  blackBox.shapeColor = "black";

  whiteBox = createSprite(750,40,20,20);
  whiteBox.shapeColor = "white"

  database = firebase.database();

  var pointerPosition = database.ref('pointer/position');
  pointerPosition.on("value", readPosition, showerr);

  button = new Button();

 // hi = createSprite(736,580,112,20);

  
}

function draw() {
  //backround("pink");

  console.log(gameState);
  
  button.display();
  

  if(position !== undefined){
    notePosition();
   
  }
  

  drawSprites();
}
function readPosition(data){
  position = data.val();

  pointer.x = position.x;
  pointer.y = position.y;
}

function notePosition(){ 
  database.ref('pointer/position').set({
  'x': mouseX,
   'y': mouseY
  })
}

function showerr(){
  console.log("An error has been indicated");
}

//if(gameState === 1){
  function mouseClicked(){
  if(pointer.x >40 && pointer.x < 60 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "red";
    stroke("red");
  }
  if(pointer.x >140 && pointer.x < 160 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "yellow";
    stroke("yellow");
  }
  if(pointer.x >240 && pointer.x < 260 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "blue";
    stroke("blue");
  }
 
  if(pointer.x >340 && pointer.x < 360 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "purple";
    stroke("purple");
  }
  if(pointer.x >440 && pointer.x < 460 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "orange";
    stroke("orange");
  }
  if(pointer.x >540 && pointer.x < 560 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "green";
    stroke("green");
  }
  if(pointer.x >640 && pointer.x < 660 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "black";
    stroke("black");
  }

  if(pointer.x >740 && pointer.x < 760 && pointer.y < 50 && pointer.y > 30 && gameState === 1){
    pointer.shapeColor = "white";
    stroke("white");
  }

  if(pointer.x >680 && pointer.x < 810 && pointer.y < 585 && pointer.y > 575 && gameState === 1){
    console.log("yes");
    background("lavender");
    gameState = 2;
 changeColour();
  }
//}



  function changeColour(){
    console.log("function has been called");
    redBox.shapeColor = "pink";
    yellowBox.shapeColor = "turquoise";
    blueBox.shapeColor = "baige";
    purpleBox.shapeColor = "magenta";
    orangeBox.shapeColor = "maroon";
    greenBox.shapeColor = "aqua";
    blackBox.shapeColor = "violet";
    whiteBox.shapeColor = "brown";
    
    mouseClicked();
  }

 // if(gameState === 2){
   // function mouseClicked(){
      if(pointer.x >40 && pointer.x < 60 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "pink";
        stroke("pink");
      }
      if(pointer.x >140 && pointer.x < 160 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "turquoise";
        stroke("turquoise");
      }
      if(pointer.x >240 && pointer.x < 260 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "baige";
        stroke("baige");
      }
     
      if(pointer.x >340 && pointer.x < 360 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "magenta";
        stroke("magenta");
      }
      if(pointer.x >440 && pointer.x < 460 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "maroon";
        stroke("maroon");
      }
      if(pointer.x >540 && pointer.x < 560 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "aqua";
        stroke("aqua");
      }
      if(pointer.x >640 && pointer.x < 660 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "violet";
        stroke("violet");
      }
    
      if(pointer.x >740 && pointer.x < 760 && pointer.y < 50 && pointer.y > 30 && gameState === 2){
        pointer.shapeColor = "brown";
        stroke("brown");
      }
   // }
  //}
  

}
 