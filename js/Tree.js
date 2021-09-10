class Tree{
    constructor(){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(400,350,300,650, options);
        this.image = loadImage('./images/tree.png');

        this.w= 300; 
        this.h = 650;

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;

        fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
    }
}