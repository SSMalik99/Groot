let fs = require("fs");

let buf = new Buffer.alloc(1024);
fs.open("input.txt","r+",function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("File opwned successfully");
	console.log("Going to read the file");
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
	if(err){
		console.log(err);
	}
	console.log(bytes+"bytes count");
	if(bytes>0){
		console.log(buf.slice(0,bytes).toString());
	}

	fs.close(fd,function(err){
		if(err){
			console.log(err);
		}
		console.log("File closed successfully");
	});
});
});


fs.unlink("input.txt",function(err){
	if (err) {
		return console.error(err);
	}
	console.log("File deleted successfully");
});