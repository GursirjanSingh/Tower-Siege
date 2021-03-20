class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution:0.4,
            friction:1.0,
            
        }
        this.Body = bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World = world.add(world,this.body);
    }
    display(){

        var angle = this.body.angle ;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        RECT(0,0,this.width,this.height);
        pop();
    }
}