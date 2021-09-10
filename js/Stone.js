class Stone{
    constructor(x,y){
        
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        
        }

        this.body = Bodies.circle(x,y,50,options);
        this.r=50;
        this.image = loadImage('./images/stone.png')

        World.add(world,this.body);
    }

    display(){

        
        var pos = this.body.position;
        
        fill('white');
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,this.r,this.r);
    }
}