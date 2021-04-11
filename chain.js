class Chain{
    constructor(bodyA,pointB){
        var option = {
        bodyA : bodyA,
         pointB : pointB,
         stiffness:0.04,
        length:200

        }
this.pointB=pointB
this.chain = Constraint.create(option)
World.add(world, this.chain)

    }

display(){

if (this.chain.bodyA) {
    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}
}