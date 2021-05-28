var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division=[];
var particle;

var divisionHeight=300;
var score =0;
var turn=0;
var count=0;

var gameState="play";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   
  
   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
}
 


function draw() {

  background("black");
  noStroke();
  textSize(35);
  fill("white");

  text("Score  " + score, width-750, 50);
  text("500",10,560);
  text("500",90,560);
  text("500",170,560);
  text("500",250,560);
  text("100",330,560);
  text("100",410,560);
  text("100",490,560);
  text("200",570,560);
  text("200",650,560);
  text("200",730,560);

  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    
  }


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }
  
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
   
}

function mousePressed(){
  if(gameState!=="end"){

count++;
particle=new Particle(mouseX,10,10,10);

  }
}
