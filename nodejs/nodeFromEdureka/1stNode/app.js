const express = require('express');
const app = express();
const port = 9900;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;




//default route
app.get("/",(req,res)=>{
    res.send("i'm runnig at default page");
})

//resaurent
app.get("/restaurent",(req,res)=>{
    db.collection('restaurent').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
})

//city
app.get("/city",(req,res)=>{
    db.collection('city').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
})

//reataurent aray with some condition for this purpose we will use params and query params
//by using params
app.get('/restaurent/:id',(req,res)=>{
    var id = req.params.id;
    db.collection('restaurent').find({city:id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
})

//mealtype
app.get("/mealtype",(req,res)=>{
    db.collection('mealType').find().toArray((err,result)=>{
        if (err) throw err;
        res.send(result);
    });
})

//cuisine route
app.get("/cuisine",(req,res)=>{
    db.collection("cuisine").find().toArray((err,result)=>{
        if(err) throw error;
        res.send(result);
    });
})



//connect mongodb and node js
MongoClient.connect(mongourl,(error,connection)=>{
    if (error) console.log(error);
    db =connection.db('bubbyDB');

    app.listen(port,(err)=>{
        if (err) throw err;
        console.log(`i m at ${port}`)
    })
})

// MongoClient.connect(mongourl,(err,connection) => {
//     if(err) console.log(err);
//     db = connection.db('edurekinternship');
  
//     app.listen(port,(err) => {
//       if(err) throw err;
//       console.log(`Server is running on port ${port}`)
//     })
//   })