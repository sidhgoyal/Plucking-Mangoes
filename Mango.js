class mango{
	constructor(x,y,radius){
		var options={
			isStatic:true,
			restitution:0,
			friction:5,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.image=loadImage("mango.png");
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.radius*2, this.radius*2)
			pop()
			
	}

}