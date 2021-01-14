class Paper{
    constructor(x, y, radius){
        var options = {
            isStatic: false,
            restitution: 0.3, 
            friction: 0.3,
            density: 0.5
          }
          this.paperImg = loadImage("paper.png");
          this.body = Bodies.circle (x, y, radius, options);
          this.radius = radius;
          World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       // angleMode(RADIANS); //radians (PI is 180 degrees) is used in Matter.js, degrees is used in p5.play
        translate(pos.x, pos.y);
        rotate(angle);
        fill("purple");
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.radius, this.radius)
        image(this.paperImg, 0, 0, this.radius, this.radius);
        pop();
    }
}