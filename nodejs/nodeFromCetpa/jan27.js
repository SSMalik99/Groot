let fs = require("fs");
//asynchronous - opening file
// console.log("Going to open file");
// fs.open('sec.txt','r+',function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("file opened successfully");
// });
// console.log("we did this");

// fs.stat('input.txt',function(err,stats){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log(stats)//we will get file info successfully
// 	//to check file type
// 	console.log("is this a file",stats.isFile());
// 	console.log("is this a Directory",stats.isDirectory());
// });
let data = "['we', 'are', 'for', 'the', 'earth', 'not', 'a', 'particular', 'nation']"
const Mycallback = (err,data)=>{
	if (err) {
		return console.error(err)
	}
	console.log("going in right direction");
 }

fs.writeFile('input.txt', data ,(err,data)=>{
	if (err) {
		return console.error(err)
	}
	console.log("going in right direction");
 });

fs.readFile('input.txt',(err,data)=>{
	if(err){
		return console.error(err)
	}
	console.log(`asynchronous read: ${data.toString()}`);	
	});



