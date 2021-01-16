class Player{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
        this.sides = sides;
        this.radius = radius;
        this.image = loadImage("pentagon.png");
        World.add(world,this.body);
    }

    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y, 40, 40);
        pop();
    }
}
