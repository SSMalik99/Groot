//interface in typescript:- just a blue print of class to use multuple inheritance without any ambiguity


interface car//interfacename
{
	cDetail();
	modelNumber();
}
class inter implements car
{
	public cDetail()
	{
	console.log("blue color");
	}
	public modelNumber()
	{
	console.log("bmw")
	}
}
let obj1=new inter;
obj1.cDetail();
obj1.modelNumber();


//inheritance mechanism to acquire all the behaviour of another class
//syntax
//class A{}
//class B extends A{}
class parent
{
	mat1()
	{
	return "Singh";
	}
}
class child extends parent
{
	mat2()
	{
	var trial="Saravjeet" + super.mat1();
	return trial;
	}
}
let obj2=new child;
obj2.mat2();
console.log(obj2);