class Rubber {
  constructor(x,y, r){
     var options = {
      'restitution':0.8,
      'friction':5,
      'density':1.0
  }
  this.body = Bodies.circle(x, y, (r-20)/2 , options);
  this.width = 150;
  this.height = 40;
  this.r=r
  //this.image=loadImage("sprites/base.png")
  World.add(world, this.body);

   // this.image = loadImage("Hammer-removebg-preview.png");
  }

 
  display(){
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,  this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("orange");
    fill("green");
    ellipse(0, 0, this.r, this.r);
    pop();
  }

}
