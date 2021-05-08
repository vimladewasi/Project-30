class Box2 {

    constructor(x, y, width, height) {
        var options = {
  
            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02
  
        }
  
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visiblity- 255
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
  
    display() {
        var pos = this.body.position;
        strokeWeight(2);
        fill("blue");
        if(this.body.speed < 3){
            rect(pos.x, pos.y, this.width, this.height);
        }
        else {
            World.remove(world,this.body);
            push();
            this.Visiblity-this.Visiblity-5;
            tint(255,this.Visiblity);
           // rect(pos.x, pos.y, this.width, this.height);
            pop();
        }
  
    }
  }