class Polygon{

    constructor(x, y,radius) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.circle(x, y,radius,options);

        this.radius = radius;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        strokeWeight(4);
        fill("yellow");
        circle(pos.x, pos.y, this.radius);

    }
}