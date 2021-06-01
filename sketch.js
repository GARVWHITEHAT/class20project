var fixedR,moveR








function setup() {
  createCanvas(800,400);
 fixedR = createSprite(400, 200, 50, 50);
 moveR = createSprite(200,100,20,20);

}


function draw() {
  background(0);  
  moveR.x=mouseX;
  moveR.y=mouseY;
  
  console.log(moveR.x-fixedR.x)
  
  if(moveR.x-fixedR.x<fixedR.width/2+moveR.width/2 && fixedR.x-moveR.x<fixedR.width/2+moveR.width/2 && moveR.y-fixedR.y<fixedR.height/2+moveR.height/2 && fixedR.y-moveR.y<fixedR.height/2+moveR.height/2){
    fixedR.shapeColor="pink";
    moveR.shapeColor="pink";
  }
  else{
    fixedR.shapeColor="yellow";
    moveR.shapeColor="yellow";
  }
  
  drawSprites();
}