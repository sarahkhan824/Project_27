class Roof{
    constructor(x,y,width,height){
    var options={
        isStatic:false,
        'restitution':0.8,
         'friction':1.0,
        'density':1.0
        }
    this.y = y;
    this.x = x;
    this.width= width;
    this.height= height;
    this.body = Bodies.rectangle(this.x, this.y,width,height, options);
    
    World.add(world, this.body);
    display()
    {

    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(255,0,255)
    rectMode(this.x,this.y,this.width, this.height);
     pop(); 
    }
    
    }
}
