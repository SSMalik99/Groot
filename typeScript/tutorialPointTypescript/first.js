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
function func1() {
    var val = "func1 created";
    return val;
}
var func2 = function (num1, str1) {
    console.log(num1);
    console.log(str1);
};
console.log(func1());
func2(66, "Well Done");
//Optional parameter
var Optional_func = function (name1, age1, email) {
    if (email != undefined) {
        console.log(name1, age1, email);
    }
    else {
        console.log(name1, age1);
    }
};
Optional_func("sarav", 21);
Optional_func("sarav", 21, "sarv@gmail.com");
