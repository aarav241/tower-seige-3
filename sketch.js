const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var gamestate= "play";

function setup(){
 createCanvas(1366,657);

 ground = createSprite(685,647,width,20)

 base = createSprite(870,550,200,10);

 base2 = createSprite(1200,350,200,10);

    engine = Engine.create();
    world = engine.world;

    basebody = Bodies.rectangle(870,550,200,10,{isStatic:true} )
    World.add(world,basebody)
    basebody2 =Bodies.rectangle(1200,350,200,10,{isStatic:true} )
    World.add(world,basebody2)

    groundbody = Bodies.rectangle(685,647,width,20,{isStatic:true} )
    World.add(world,groundbody)

    //bottom level base-1
    box1=new Box(870,500,50,50);
    box2=new Box(920,500,50,50);
    box3=new Box(820,500,50,50);
    //secodary level base-1
    box4=new Box(845,400,50,50);
    box5=new Box(895,400,50,50);
    //frist level base-1
    box6=new Box(870,350,50,50);

    //bottom level base-2
    box7=new Box(1200,300,50,50);
    box8=new Box(1150,300,50,50);
    box9=new Box(1250,300,50,50);
    //secondary level base-2
box10=new Box(1230,200,50,50);
   box11=new Box(1180,200,50,50);
   //frist level base-2
    box12=new Box(1200,150,50,50);

    circle=new bird(300,400,30,30)

    slingshot = new Slingshot(circle.body,{x:300,y:400});
}
function draw(){
    background(43,42,47);

   // noStroke();
    textSize(35)
    fill("white")
    text("Score : " + score, width-300, 50)

    if(gamestate === "launched" ){
    
        //noStroke();
        textSize(35)
        fill("white")
        text("Did you like the GAME :) ", width-400, 100)
    }
    Engine.update(engine);

    base.x=basebody.position.x;
    base.y=basebody.position.y;
    base2.x=basebody2.position.x;
    base2.y=basebody2.position.y;
   ground.x=groundbody.position.x;
   ground.y=groundbody.position.y;

    //bottom level base-1
    box1.display();
    box2.display();
    box3.display();
    // secodary level base-1
    box4.display();
    box5.display();
// frist level base-1
box6.display();

 // base-2
 box7.display();
 box8.display();
 box9.display();
 box10.display()
box11.display();
box12.display();

circle.display();

slingshot.display();
    drawSprites();
    textSize(22);
textFont("Arial");
    text("Drag the stone to launch and SMACH the blocks",400,100)
}
function mouseDragged(){
   
    Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY});
    Matter.Body.setStatic(circle,false);
    }
    
    function mouseReleased(){
    slingshot.fly();
    gamestate= "launched";
    }
    function keyPressed(){
        if(keyCode ===32){
            Matter.Body.setPosition(circle.body,{x:300,y:400});
            slingshot.attach(circle.body)
            gamestate="play";
            Matter.Body.setStatic(circle,true);
        }
        
        
        }
