class PAPER{
    constructor(x,y,radius,radius2){
        var options = {
            restitution:0.1,
            density:1,
            friction:1
            
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.rectangle(x,y,radius,radius2,options);
        this.radius = radius;
        this.radius2 = radius2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.radius,this.radius2);
    }
}