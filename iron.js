class Iron {
  constructor(x,y){
     var options = {
      'restitution':0.8,
      'friction':3.0,
      'density':30
  }
  this.body = Bodies.rectangle(x, y, 80, 50, options);
  this.width = 80;
  this.height = 50;
  //this.image=loadImage("sprites/base.png")
  World.add(world, this.body);

   // this.image = loadImage("Hammer-removebg-preview.png");
  }

 
  display(){
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,  this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }

}
