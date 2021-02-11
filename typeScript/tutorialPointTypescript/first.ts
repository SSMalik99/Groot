// //Some theory is in your Register or notes;



// // let num:number = 12;
// // console.log(num);

// var message:string = "hello World";
// console.log(message);


// /**TypeScript and Object Orientation
// TypeScript is Object-Oriented JavaScript. Object 
// Orientation is a software development paradigm that 
// follows real-world modelling. Object Orientation 
// considers a program as a collection of objects that 
// communicate with each other via mechanism called 
// methods. TypeScript supports these object oriented 
// components too.

// Object − An object is a real time representation of 
// any entity. According to Grady Brooch, every object 
// must have three features −

// State − described by the attributes of an object

// Behavior − describes how the object will act

// Identity − a unique value that distinguishes an object from a set of similar such objects.

// Class − A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object.

// Method − Methods facilitate communication between objects. */
// class Greeting{
//     greet():void{
//         console.log("Hello World!!");
//     }
// }
// let obj1 = new Greeting();
// obj1.greet();

// //way to declare variable

// //1st way
// var name1:string = "Sarav";
// console.log(name1);
// var num1:number = 77.66 ;
// console.log(num1);

// //2nd way
// var name1 = "Sarav";
// console.log(name1);
// var num1 = 77.66 ;
// console.log(num1);

// //3rd way
// var name1:string;
// console.log(name1);
// var num1:number ;
// console.log(num1);

// //4th way
// var name2;
// console.log(name2);
// var num2; 
// console.log(num2);


// //Type Assertion
// //not working don't know why
// var str1 = "1";
// console.log(typeof(str1));
// var str2:number = <number> <any> str1;
// console.log(typeof(str2));

// "use strict";
// var str3 = "2";
// console.log(typeof(str3));
// var str4 = str3;
// console.log(typeof(str4));


// //Inferred Typing in TypeScript:- means you can't assign a different type of varible to the different datatype as we are doing in below example;

// // var num = 2;    // data type inferred as  number 
// // console.log("value of num "+num); 
// // num = "12";
// // console.log(num);
// //Error:-Type 'string' is not assignable to type 'number'


// //TypeScript Variable Scope

// var global_num = 13;//global varible
// class Numbers{
//     num_val = 1 //class variable or field
//     //class varible or field  are those, which are declared inside the class but outside the methods used using class object
//     static val1 = 2// static class field
//     //class static field can be accesse dusing      object but we prefer by them by class name;

//     storeNum():void{
//         var local_var = 14;//local varible 
//     }
// }

// console.log(global_num);
// console.log(Numbers.val1);
// let obj1_numbers = new Numbers();
// console.log(obj1_numbers.num_val);
// console.log(obj1_numbers.storeNum());

// //output:- 13, 2, 1, undefined
// //local var can't be used outside they will provide Error! :-Could not find the varible name;


//Function:-

//defining:-
/*suntax:-
function function_name(){
    //function body
}

const function_name = ()=>{}

calling:-
function_name();

returning a value:-
function function_name():return_Type
//(return type like void, string or any other is optional)
{
    function statements
    return function_value;
}

function with parameter:-
function function_name(parameter1:datatype,parameter2:data-type,...)
{
    function body working on these parameters;
}


*/
// function func1(){
//     var val = "func1 created";
//     return val;
// }
// const func2 = (num1:number,str1:string)=>{
//     console.log(num1);
//     console.log(str1);
// }

// console.log(func1());
// func2(66,"Well Done");



// //Optional parameter
// const Optional_func = (name1:string,age1: number,email?: string)=>{
//     if(email!=undefined){
//         console.log(name1,age1,email);
//     }else{
//         console.log(name1,age1);
//     }
    
// }
// Optional_func("sarav",21);
// Optional_func("sarav",21,"sarv@gmail.com");


//rest parameter :-parameter that can take any no. of value to perform a specific task and collect them into an array;
// //add three dot to define a rest parameter
// const rest_Function = (...res_para:number[])=>{
//     //work on this array
// }


//default parameter:- parameter with default value;
//syntax:-
// function funtion_name(para1:any,para2 = deault_value){}


/*
syntax to create fuction using constructor or Function class

var function_name = new Function(par1,par2,...){function body}

*/


//Recursion :- using a function inside the same function untill we get the right result;

/* example:-
 function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));      // outputs 720 
 */


 //anonymous recusive function :-
//  syntax:- function(){}();
//this fuction is called automatecully cause there is no way  to call interface;
//example:-

// (function(){
//     console.log("Let's Play!");
// })()

/*
Function Overload = is possible if the signature of functions are different 

signatures means either different datatype, different number of datatype or diffrent sequence of parameter

example is as follow
 
different data types
const funv1 =(par:string)=>{}
const funv1 =(par:number)=>{}

different number of parameter
const funv1 =(par:string)=>{}
const funv1 =(par:string,par1:number)=>{}

different sequence of parameter
const funv1 =(par1:string,par2:number)=>{}
const funv1 =(par1:number,par2:string)=>{}

*/

/* 
Interface:- interface is just like a blue print of something like object or may be class so that we can
use same to make many objects of same type look at the example:-
Syntax:-interface inteface_name{}

interfaces have zero runtime javascript impact:-
cause ther is no javaScript is  emitted when we declare an interface.
*/
/*
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);
 */

 //union type of interface

//  interface RunOptions { 
//     program:string; 
//     commandline:string[]|string|(()=>string); 
//  } 
 
//  //commandline as string 
//  var options:RunOptions = {program:"test1",commandline:"Hello"}; 
//  console.log(options.commandline)  
 
//  //commandline as a string array 
//  options = {program:"test1",commandline:["Hello","World"]}; 
//  console.log(options.commandline[0]); 
//  console.log(options.commandline[1]);  
 
//  //commandline as a function expression 
//  options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
//  var fn:any = options.commandline; 
//  console.log(fn());


// //interface and arrays

// interface namelist { 
//     [index:number]:string 
//  } 
 
// //  var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
// var list2:namelist = ["John","Wayne","Bran"] //Error. 1 is not type string  
//  interface ages { 
//     [index:string]:number 
//  } 
 
//  var agelist:ages; 
//  agelist["John"] = 15   // Ok 
// //  agelist[2] = "nine"   // Error
//  agelist[2] = 9
//  TypeError: Cannot set property 'John' of undefined
//     at Object.<anonymous> (C:\Users\Kamaljeet Kaur\Desktop\bubby's fullstack\angular\edureka angular\Groot\typeScript\tutorialPointTypescript\first.js:5:17)

    

// // interface allow us inheritence

// Syntax: Single Interface Inheritance

// Child_interface_name extends super_interface_name


// Syntax: Multiple Interface Inheritance

// Child_interface_name extends super_interface1_name, super_interface2_name,…,super_interfaceN_name



/*CLASS in TypeScript:-
Syntax:-
class class_name { 
    //class scope 
 }

 A class definition can include the following −

Fields − A field is any variable declared in a class. Fields represent data pertaining to objects,
not need to use let,var or const for class fields;

Constructors − Responsible for allocating memory for the objects of the class

Methods −  represent actions an object can take.


class Car { 
   //field 
   engine:string; 
 
   //constructor 
   constructor(engine:string) { 
      this.engine = engine 
   }  

   //function 
   disp():void {//void when method is nor returning anythin; 
      console.log("Engine is  :   "+this.engine) 
   } 
}



creating instance/object of a class

syntax:-
var object_name = new class_name(arguments)//argument for constructor if it is parameterised;


accessing class field
obj_name.field_name;

to access method
obj_name.method.name;


inheritance of classes

single and multilevel is allowded but multiple is not allowded;

class classA{}

//single level
class classB extends classA{
    super.constructor()//you can also override method of parent after calling method by super.method_name;
}

//multilevel
class classC extends classB{}
in this classC extends ClassB and classB extends ClassA that is called multi level inheritance;


static method or field can also be created in the class using static keyword

syntax:-
static method_name/field_name:{//body}


data can be hide in the class using access specifier public,private or protected


Classes and Interfaces
Classes can also implement interfaces.

interface ILoan { 
   interest:number 
} 

class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 

var obj = new AgriLoan(10,1) 
console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )




An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects. The syntax is given below −

Syntax
var object_name = { 
   key1: “value1”, //scalar value 
   key2: “value”,  
   key3: function() {
      //functions 
   }, 
   key4:[“content1”, “content2”] //collection  
};


Duck-typing:-means when two objects follow the same properties;

The TypeScript compiler implements the duck-typing system that allows object creation on the fly while keeping type safety.

Example

interface IPoint { 
   x:number 
   y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
   var x = p1.x + p2.x 
   var y = p1.y + p2.y 
   return {x:x,y:y} 
} 

//Valid 
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  

//Error 
var newPoint2 = addPoints({x:1},{x:4,y:3})






*/

