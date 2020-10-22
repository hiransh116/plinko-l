const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division;
var divisionHeight=300;
var particle=[];
var divisions=[];
var plinko=[];
var score=0,variablewTurn=0;
var part;
var gameState='PLAY';


function setup() {
  createCanvas(490,800);
  engine = Engine.create();
  world = engine.world;
  
  //making things
  ground=new Ground(245,790,490,20);
 // division=new Ground(10,655,10,250);
  for (var k=0;k<=width;k=k+80){
    divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
  }
  for (var j=10;j<=width;j=j+50){
    plinko.push(new Plinko(j,65));
  }
  for (var j=0;j<=width-10;j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var j=10;j<=width-20;j=j+50){
    plinko.push(new Plinko(j,275))
  }
  for (var j=0;j<=width-30;j=j+50){
    plinko.push(new Plinko(j,375))
  }
  
}


function draw() {
  background(0);  
  ground.display();
  //division.display();
  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for (var j=10;j<plinko.length;j++){
    plinko[j].display();
  }
 
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
  for(var j=10;j<plinko.length;j++){
    plinko[j].display();
  }
  for(var j=0;j<plinko.length;j++){
    plinko[j].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2-10),10,10));
  }
  for(var u=0;u<particle.length;u++){
    particle[u].display();
  }
  
  
  drawSprites();
  text('score:'+score,10,10);
}
//function mousePressed(){
//  if(gameState!==PLAYy){
 //   score++;
 //   part=new Particle(mouseX,10,10);
 // }
//}

