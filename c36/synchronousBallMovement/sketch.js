var game,player,form,database;
var gameState=0;
var playerCount=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(800,800);
game=new Game();
game.getState();
game.start();


}

function draw(){
  background("white");
  
   
}

