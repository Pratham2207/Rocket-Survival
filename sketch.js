const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg;

var player,player1,player2;

var score = 0;

var ground;

var bg,bg2,bg3;

var mode;

var obstacle,obstacle2,obstacle3;

var engine,world;

function preload(){
  bg2 = loadImage("images/bg2.jpg");
  bg = loadImage('images/main-bg1.png');
  bg3 = loadImage('images/bg3.jpg');
}


function setup() {
  createCanvas(1366,displayHeight-50);
  engine = Engine.create();
  world = engine.world;

  console.log(1366);
  console.log(displayHeight-50);

  mode = 0;

  // bg2 = new Bg1(683,displayHeight-50/2,1366,displayHeight-50);
  player = new Player(1366/2-200,displayHeight-100,100,100);
  player1 = new Crewmate(1366/2-150,displayHeight-100,100,100);
  player2 = new Crewmate2(1366/2-100,displayHeight-100,100,100);
  ground = new Ground(1366/2-50,displayHeight-50,1366+1500,5);
  obstacle = new Obstacle(1366/2+600,displayHeight-70,200,100);
  obstacle2 = new Obstacle(1366/2+1000,displayHeight-70,200,100);

  // obstacle3 = new Obstacle(1366/2+1000,displayHeight-70,200,100);



}

function draw() {
  background(255);  
  Engine.update(engine);
  // bg2.display();

  if(mode === 0){
    background(51);
    textSize(50);
    text('The crewmates are stuck in a spceship help them reach earth.',1366/2);
    textSize(20);
    text('Press UP,LEFT or RIGHT arrow keys to begin');
    // mode = 1;
  }

  // obstacle3.display();

  if(mode === 1){
    background(bg2);
    player.display();
    player1.display();
    player2.display();
    ground.display();
    obstacle.display();
    obstacle2.display();
  }


  // if(ground.body.position.x < 0){
  //   Matter.Body.setPosition(ground.body,{x:1366/2,y:height});
  // }

  // if(obstacle3.body.position.x < -10){
  //   Matter.Body.setPosition(obstacle3.body,{x:1366/2+500,y:displayHeight-70});
  // }

  if(player1.body.position.x >= 1370 || player.body.position.x >= 1370 || player2.body.position.x >= 1370 && mode === 1){
    console.log("out of the screen!!");
    // background(bg);
    mode = 2;
  }
  if(mode === 2){
  background(bg);
  player.display();
  player1.display();
  player2.display();
  ground.display();
  obstacle.display();
  obstacle2.display();
  }

  if(player1.body.position.x >= 1370 || player.body.position.x >= 1370 || player2.body.position.x >= 1370 && mode === 2){
    console.log("out of the screen!!");
    // background(bg);
    mode = 3;
  }

  if(mode === 3){
    background(bg3);
    player.display();
    player1.display();
    player2.display();
    ground.display();
    obstacle.display();
    obstacle2.display();
  }

  // if(player1.body.position.x >= 1370 || player.body.position.x >= 1370 || player2.body.position.x >= 1370 && mode === 1){
  //   console.log("hitting");
  //   background(bg2);
  // // }

  // textSize(25);
  // fill("black");
  // text("Score: 0",1366-100,displayHeight-700);

  
  if(obstacle.body.position.x < -10){
    Matter.Body.setPosition(obstacle.body,{x:1300,y:displayHeight-70});
  }
  if(obstacle2.body.position.x < -10){
    Matter.Body.setPosition(obstacle2.body,{x:1600,y:displayHeight-70});
  }  

  if(obstacle.body.position.x == player.body.position.x){
    console.log("hit");
  }



  keyPressed();


}

function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.setVelocity(player.body,{x:2,y:-5});
  }
  if(keyDown(LEFT_ARROW)){
    Matter.Body.setVelocity(player1.body,{x:2,y:-5});
  }
  if(keyDown(RIGHT_ARROW)){
    Matter.Body.setVelocity(player2.body,{x:2,y:0});
  }
  if(keyCode === 32){
    mode = 1
  }
  }