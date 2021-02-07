/*events:- in node.js as its server starts it simply initiate variable,  declare function then wait for event to happen 
that's why node is faster than other

will use class EventEmitter connect events and listener  to events;*/


//import "events" module
let events = require("events");

//create an eventEmitter onject 
let eventEmitter = new events.EventEmitter();


//create an event handler
let connectHandler = function connected(){
	//function body
	console.log("connected")//for trial


	//fire the data_recevied event
	eventEmitter.emit("data_received");
}


//bind the connection event with the handler 
eventEmitter.on("connection",connectHandler);


//bind the data_recieved with the anonymous function
eventEmitter.on("data_received",function(){
	//function body
	console.log("data received successfully");//for trial
});


//fire the connection event

eventEmitter.emit("connection");
console.log("program ended");




/*Buffers in node.js:- are used to store raw data similar to an  array of int outside the heap of v8 engine ,,, 
is a global class so can be used without 
import it means no need to require using object.  



data saved in ascii format to read this data we need to convert this data into string format ;
if we read without the conversion then we will get the value of ascii number of the data;
*/

// to writee
let buf = new Buffer.alloc(256);
let len = buf.write("Welcome to my Hood");
console.log(`Octet Written : ${len}`)
//to read
console.log(buf.toString());

let buf1 = new Buffer.alloc(256);
for (let i =0; i <=22; i++) {
	buf1[i] = i+97;
}

console.log(buf1.toString("ascii"));

console.log(buf1.toString("ascii",0,5));
console.log(buf1.toString("utf8",0,5));
console.log(buf1.toString(undefined,0,5));

//2nd way to give value

let buf2 = new Buffer.from("ja ni jawaniye");
let json =  buf2.toJSON(buf2);
console.log(json);


let buf3 = new Buffer.from("wah ni");
let buf4 = new Buffer.from(" jawaniye");
let buf5 = Buffer.concat([buf3,buf4]);
console.log(buf5);
console.log(buf5.toString());

