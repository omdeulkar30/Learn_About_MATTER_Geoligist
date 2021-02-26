class Hammer {
  constructor(x,y){
     var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y, 50, 50, options);
  this.width = 150;
  this.height = 40;
  //this.image=loadImage("sprites/base.png")
  World.add(world, this.body);

   // this.image = loadImage("Hammer-removebg-preview.png");
  }

 
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,  this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }

}
