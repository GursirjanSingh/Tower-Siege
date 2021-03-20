class Stand {
constructor(){

    var options = {
        isStatic:true
    }

    this.Body = bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World = world.add(world,this.body);
}

display(){
    var angle = this.body.angle ;
    strokeWeight(2);
    fill("white");
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    RECT(0,0,this.width,this.height);
    pop();
}



}