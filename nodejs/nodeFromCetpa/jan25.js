   const fs = require('fs');

   // var readerStream = fs.createReadStream('input.txt');
   
   // readerStream.setEncoding('UTF8');
   // readerStream.on('data',function(chunk){
   // 	data += chunk;
   // });

   // readerStream.on('end',function(){
   // 	console.log(data);
   // });
   // readerStream.on('error',function(err){
   // 	console.log(err.stack);
   // });
   // console.log('program ended')

   // var data = "mein te meri jaan sodai ikko jehe- Satinder Sartaj";
   // var writerStream = fs.createWriteStream('input.txt');
   // writerStream.write(data,'UTF8');
   // writerStream.end();

   // writerStream.on('finish',function(){
   // 	console.log('write completed');
   // });
   // writerStream.on('error',function(err){
   // 	console.log(err.stack);
   // });


   //stream pipe :- mechanism where we provide another stream with the output
   // of one strem as the input it is normally used for collec

   //ting data from one strema and passing the out put to another stream.


   // let readerStream = fs.createReadStream('sec.txt');
   // let writerStream = fs.createWriteStream('input.txt');

   // readerStream.pipe(writerStream);
   // console.log('successfully');

   fs.readFile('input.txt',function(err,data){
   	if(err){
   		return console.error(err);
   	}
   	console.log("Asynchorous read:" + data.toString());
   });
   let data = fs.readFileSync('input.txt');
   console.log('Synchronous read:' + data.toString());
   console.log('Program Ended');

