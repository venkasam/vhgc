const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box2;
var score=100
var li=[]

function preload(){

pic1=loadImage("garden.png")


}



function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    
    engine = Engine.create();
    world = engine.world;
   
       
   
    all=new Box(displayWidth/2,displayHeight/2,200,50)
    all2=new Ground(displayWidth/2,displayHeight/2,50,200)
   groun=new Ground(displayWidth/2,displayHeight-50,displayWidth,100)
   hit1=new Box(random(0,1200),50,random(20,100),random(20,100))

   slin1=new Sling(all.body,all2.body)
   button=createButton("play")
   button.position(200,50)
   
   
   
   
    
   

}

function draw(){
    background(pic1);
    Engine.update(engine);
    
    all.display()
    groun.display()
    all2.display()
    slin1.display()
    hit1.display()
       
    
    
  


 
    
if(frameCount%70==0){
        hit1=new Box(random(0,1000),50,random(20,100),random(20,100))
       hit1.display()
    }

}
    function mouseDragged(){
        Matter.Body.setPosition(all.body, {x: mouseX , y:mouseY});
        
    }













