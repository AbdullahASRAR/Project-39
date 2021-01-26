var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bike1,bike2,bike3,bike4,bikes;


var form, player, game;
function preload(){
  bike1Img=loadImage("images/biker2.png");
  bike2Img=loadImage("images/biker7.png");
  bike3Img=loadImage("images/biker6.png");
  bike4Img=loadImage("images/biker9.png");
  trackImg=loadImage("images/track.jpg");
  ground=loadImage("images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}

