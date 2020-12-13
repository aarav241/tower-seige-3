class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if (this.body.speed < 8)
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke("black");
      fill(53,209,211);
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world,this.body);  
      
      push();
      this.Visibility = this.Visibility - 68;
      tint(0,this.Visibility);  
      //rect(this.body.position.x,this.body.position.y,this.Visibility,50,50);
      console.log(this.Visibility); 
     pop();
  
      }
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-1000){
      
      score++;
      }
      
      }
  }