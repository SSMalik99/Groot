//How to create server

// const http = require('http');
// const myMod = require("./mymodule");

// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":'text/html'});
//     res.write(`hello dear the time is ${myMod.showDate()}`);
//     res.end();
// }).listen(8081);


//read the query string 
// const http = require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8081)

// console.log("i'm working");

// output:- http://localhost:8081/;-  /
// http://localhost:8081//summer:-  /summer
// http://localhost:8081/winter/summer:-   /winter/summer



// split the query string: for this we will also use "url" module

// const http = require('http');
// const url = require('url');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     let urlRes=url.parse(req.url,true).query;
//     //parse will change data into the javascript object
//     let txt = urlRes.year +" "+urlRes.month
//     res.write(txt);
//     res.end();
//     console.log('i am working');
// }).listen(8081)

//address:http://localhost:8081/?year=2017&month=July
//result:-2017 July





