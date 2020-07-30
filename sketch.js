var score,foodstock,database,food,min,gamestock,button,buttonm;
var link=[]
var x=100
var r=1
function preload()
{
  dog=loadImage("images/dog.png")
  dog2=loadImage("images/happydog.png")
  milk=loadImage("images/milk.png")
  liv=loadImage("images/Living Room.png")
  wash=loadImage("images/Wash Room.png")
  sleep=loadImage("images/Bed Room.png")
}

function setup() {
	createCanvas(800, 700);
  dor=createSprite(400,350,50,50)
  dor.scale=.5
  dor.addImage("change",dog)
  database=firebase.database()
  for(i=0;i<800;i=i+50){
  link.push(mil=createSprite(i,100,30,50),mil.addImage("h",milk),mil.scale=.1)
  }
  min=createSprite(200,350,60,70)
  min.addImage(milk)
  min.scale=.2
  foodstock=database.ref('food')
  foodstock.on("value",readstock)
  game=database.ref('gamestate')
  game.on("value",gamestock)
  button=createButton("addfood")
  buttonm=createButton("feedog")
  button.position(750,200)
  buttonm.position(750,150)
  button.mousePressed(()=>{
    write(x)
    x=x-1
    
    })
    buttonm.mousePressed(()=>{
    x=x+1
       })
}


function draw() {  
background(rgb(100,100,100))
  

if (frameCount%10==0){
  writ(r)
}
if (frameCount%20==0){
  writ(r)
   r=2
}

if (gamestock==2){
background(liv)





}
  if(keyWentDown(UP_ARROW)){
write(x)
dor.addImage("change",dog2)
x=x-1
min.visible=false


} else{
dor.addImage("change",dog)

}
 text(x,775,100)
 
  
  drawSprites();
  

}

function readstock(data){
  food=data.val()
}
function write(x){
database.ref("/").update({
food:x

})
}

function gamestock(data){
  gamestate=data.val()
}
function writ(r){
  database.ref("/").update({
  gamestate:r
  
  })
}

