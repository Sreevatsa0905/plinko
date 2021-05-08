class Plinko
{
    constructor(x,y)
    {
        var options={
            restitution:1,
            isStatic:true,
            friction:0
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.postion;
        var angle=this.body.angle;
        push();
        tranlsate(pos.x,pos.y);
        roate(angle);
        elipse(0,0,10,10);
        pop();
    }
}