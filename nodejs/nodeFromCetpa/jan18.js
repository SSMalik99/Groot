
// var fs1,fs2=require("fs");
// var data = fs1.readFileSync("input.txt");
// console.lof(data.toString());
// console.log("program ended")

 var fs2=require("fs");
fs2.readFile("input.txt",function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
});
console.log("i'm still alive");
