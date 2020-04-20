class Target {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        

        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.w = 25;
        this.h = 50;

        this.randColor = ["red", "yellow", "orange", "blue", "green"];
        this.randomNum = Math.round(random(0, 4))

        World.add(world, this.body);
    }
  
    display() {
        var angle = this.body.angle;
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        fill(this.randColor[this.randomNum]);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);

        pop();
    }
}

    /*constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.w = 25;
        this.h = 50;
        
        
        World.add(world, this.body);

        //this.randColor = ["red", "yellow", "orange", "blue", "green"];
        //this.randomNum = Math.round(random(0, 4))
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);

        pop();
    }
}*/

//this.randColor[this.randomNum]