const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var ground, Stand1, slingshot, polygon;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10; 
var block11 , block12, block13, block14, block15, block16;

var Stand2;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10; 
var Block11 , Block12, Block13, Block14, Block15, Block16;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
   createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,390,1200,20);

    Stand1 = new Ground(580,300,200,20);
    Stand2 = new Ground(900,200,200,20);

   // polygon = new Polygon(110, 100, 30);
// First Pyramid
    // level one
    block1 = new Box1(520,260,20,30);
    block2 = new Box1(540,260,20,30);
    block3 = new Box1(560,260,20,30);
    block4 = new Box1(580,260,20,30);
    block5 = new Box1(600,260,20,30);
    block6 = new Box1(620,260,20,30);
    block7 = new Box1(640,260,20,30);
    // level two
    block8 = new Box2(540,230,20,30);
    block9 = new Box2(560,230,20,30);
    block10 = new Box2(580,230,20,30);
    block11 = new Box2(600,230,20,30);
    block12 = new Box2(620,230,20,30);

    // level three
    block13 = new Box1(560,210,20,30);
    block14 = new Box1(580,210,20,30);
    block15 = new Box1(600,210,20,30);

    // Top
    block16 = new Box2(580,200,20,30);

 // Second Pyramid
// level one
    Block1 = new Box1(840,190,20,30);
    Block2 = new Box1(860,190,20,30);
    Block3 = new Box1(880,190,20,30);
    Block4 = new Box1(900,190,20,30);
    Block5 = new Box1(920,190,20,30);
    Block6 = new Box1(940,190,20,30);
    Block7 = new Box1(960,190,20,30);
    // level two
    Block8 = new Box2(860,150,20,30);
    Block9 = new Box2(880,150,20,30);
    Block10 = new Box2(900,150,20,30);
    Block11 = new Box2(920,150,20,30);
    Block12 = new Box2(940,150,20,30);

    // level three
    Block13 = new Box1(880,120,20,30);
    Block14 = new Box1(900,120,20,30);
    Block15 = new Box1(920,120,20,30);

    // Top
    Block16 = new Box2(900,100,20,30);       
    
    polygon = Bodies.circle(110,100,30)
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
   
    
}

function draw(){
    background("lightgreen");

    strokeWeight(4);
  //  polygon.display();
    slingshot.display(); 
    Stand1.display();
    Stand2.display();

// first pyramid
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
// second pyramid
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();
    
    strokeWeight(5)
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    
    Engine.update(engine);

   
} 
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
         slingshot.fly();

}
function keyPressed(){
    if (keyCode===32){
        slingshot.attach(this.polygon);
    }
}


