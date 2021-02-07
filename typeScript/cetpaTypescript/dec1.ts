//const declaration variable become constant and we can't change its value
//const num:number=100
//num=200 //will provide compile error.


//array in typescript
 let fruits:Array<string>,id:Array<number>;//1st way to define way
 fruits=["apple","banana","orange"];
 id=[10,11,22];
 console.log(fruits);
 console.log(id);
 let value:(string|number)[]=["bbb",333,"ffsf",3334,"sfsf",980];//secound way to define array
 console.log(value);
 let val:Array<string|number>=["bbb",333,"ffsf",3334,"sfsf",980];
 console.log(val,val[3]);
 console.log(val[7]);
 for(var i in val){
 	console.log(val[i]);
 }
 for(var i=0;i<fruits.length;i++){
 	console.log(val[i]);
 }