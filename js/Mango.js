class Mango{
    constructor(x,y){
        
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
        
        }

        this.body = Bodies.circle(x,y,50,options);
        this.r=50;
        this.image = loadImage('./images/mango.png')

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        fill('white');
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.r,this.r);
    }
}