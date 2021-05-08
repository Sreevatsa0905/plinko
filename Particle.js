class Particle
{
    constructor(x,y)
    {
        var options={
            restitution:0.2
        }
        this.x=x;
        this.y=y;   
        this.body=Bodies.circle(x,y,10,options);
        this.color=color((Math.random()*255+1),(Math.random()*255+1),(Math.random()*255)+1);
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,10,10);
        pop();
    }
}