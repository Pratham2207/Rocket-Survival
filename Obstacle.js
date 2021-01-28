class Obstacle{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('images/main-table.png');
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = pos.x - 3;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}