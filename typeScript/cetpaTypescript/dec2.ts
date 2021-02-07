//let x:number=4120,y=4120;
//if(x<y)
//{
//	console.log('x is less than y');
//}
//else if(y < x)
//{
//	console.log('y is less than x')
//}
//else{
//	console.log('both are equal')
//}
//constructor in typescript
class class_car
{
	speed:number;
	constructoe()
	{
		this.speed=20;
	}
	cspeed()
	{
		console.log('the speed of car'+ this.speed);
	}
	acc()
	{
		this.speed+=30;
	}
}
let obj1=new class_car
obj1.cspeed();
obj1.acc();
obj1.cspeed();