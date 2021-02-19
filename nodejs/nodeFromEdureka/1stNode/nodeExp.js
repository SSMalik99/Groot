//Basic routing using express js

const express = require("express");

const app = express();
let port = 8888;

app.get("/",(req,res)=>{
    res.send("i'm default routing");
});

app.get("/first",(req,res)=>{
    res.send("i'm first routing");
})

app.listen(port,(error)=>{
    if (error) throw error;
    console.log(`i'm working at port number ${port}`);
});