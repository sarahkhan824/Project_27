class Ball{
constructor(x,y,r){
var options={
    isStatic:false,
    'restitution':0.8,
     'friction':1.0,
    'density':1.0
    
}
this.y = y;
this.x = x;
this.r = r;
this.body = Bodies.circle(this.x, this.y,(this.r)/2, options);

World.add(world, this.body);
}
display(){

    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    fill(255,0,255)
    ellipse(0,0,this.r, this.r);
     pop(); 
}
}