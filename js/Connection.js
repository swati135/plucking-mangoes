class Chain{
    constructor(bodyA, pointB){
        var options={
            
            bodyA:bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.8,

        }

        this.chain= Constraint.create(options);
        this.pointB= pointB
        World.add(world,this.chain)

    }

    display(){
        
        if(this.chain.bodyA){
            var pointA= this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke("white")
            line(pointA.x,pointA.y,pointB.x, pointB.y)
        }
    }

    fly(){
        this.chain.bodyA= null
    }

    attach(bodyA){
        this.chain.bodyA = bodyA
    }
}