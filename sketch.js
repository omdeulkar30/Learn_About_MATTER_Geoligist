const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, sand, iron, rubber, stone;
var ground
function preload(){
    //bgImage=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
ground = new Ground(600, 600, 1200, 12)    
   hammer = new Hammer(10, 100);
    iron = new Iron(300,350);
    stone = new Stone(700, 320, 100, 100);
    rubber = new Rubber(900,450,70);

    sand = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515, 450,  10);

    sand4 =  new Sand(520,450,10);

    sand5 = new Sand(525,450,10);
    sand6 = new Sand(515,445,10 );
    sand7 = new Sand(520,445,10);
    sand8 = new Sand(525,445,10);
    sand9 = new Sand(530,445,10);


}

function draw(){
    background("black");
    Engine.update(engine);
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
    sand.display();

    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();

    sand6.display();
    sand7.display();
    sand8.display();
ground.display()
    sand9.display();
}