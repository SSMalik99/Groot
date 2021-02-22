const fs = require("fs")

// fs.writeFile("index.txt","Are you busy",(err)=>{
//     if(err) throw err;
//     console.log("file updated successfully");
// });

// fs.writeFile("index.txt","i'm also busy",(err)=>{
//     if(err) throw err;
//     console.log("file updated successfully");
// });

// fs.appendFile("index.txt","\ni'm not free",(err)=>{
//     if (err) throw err;
//     console.log("file appended successfully");
// });

// fs.readFile("index.txt","UTF-8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });

fs.unlink("index.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted successfully");
});
