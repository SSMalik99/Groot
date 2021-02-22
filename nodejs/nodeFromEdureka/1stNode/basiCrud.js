const express = require('express');
const app = express();
const port = process.env.PORT || 9944;
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongodburl = "mongodb://localhost:27017";
let coll_nam ="users"
let db;


//modules like body-parser and cors:-{cross origin resource sharing}   to add users and for the transmission of data
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
//encoding data while inserting the data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


//health check
app.get('/',(req,res)=>{
    res.status(200).send('yes! you are at right location');
});

//get all users and by using query string
app.get('/users',(req,res)=>{
    let id = mongodb.ObjectID
    let query = req.query.city//city for city query string only
    if(req.query.city){
        query= {city:req.query.city,isActivate:true}
    }else{
        query= {isActivate:true}
    }
    db.collection(coll_nam).find(query).toArray((error,result)=>{
        if (error) throw error;
        res.status(200).send(result);
    });
});

//get user using params
app.get("/users/:id",(req,res)=>{
    var id = mongodb.ObjectID(req.params.id);
    db.collection(coll_nam).find({_id:id,isActivate:true}).toArray((err,result)=>{
        if(err) throw err;
        res.status(200).send(result);
    })
});

// add new user
app.post('/addUser',(req,res)=>{
    db.collection(coll_nam).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.status(200).send('Data Added');
    })
});

//update user
app.put("/updateUser",(req,res)=>{
    let id = mongodb.ObjectID(req.body._id)
    db.collection(coll_nam).updateMany(
        {_id:id},
        {
            $set:{
                name: req.body.name,
                city: req.body.city,
                contact: req.body.contact,
                isActivate: true
            }
        },(err,result)=>{
            if(err) throw err;
            res.status(200).send('Data Updated');
        });
});
//soft delete user means  deactivate user 
app.put("/deactivateUser",(req,res)=>{
    let id = mongodb.ObjectID(req.body._id);
    db.collection(coll_nam).updateMany(
        {_id:id},
        {
            $set:{
                isActivate:false
            }
    },(err,result)=>{
        if(err) throw err;
        res.status(200).send("User Deactivated");
    });
});

//activate user

app.put("/activateUser",(req,res)=>{
    let id = mongodb.ObjectID(req.body._id);
    db.collection(coll_nam).updateMany(
        {_id:id},
        {
            $set:{
                isActivate:true
            }
    },(err,result)=>{
        if(err) throw err;
        res.status(200).send("User Activated");
    });
});

//delete user permanetly or hard delete 
app.delete('/deleteUser',(req,res)=>{
    let id = mongodb.ObjectID(req.body._id);
    db.collection(coll_nam).remove({_id:id},(err,result)=>{
        if (err) throw err;
        res.status(200).send("User deleted parmenently")
    })
})


//Connect mongodb and nodejs
MongoClient.connect(mongodburl,(err,connection)=>{
    if(err) throw err;
    db = connection.db('bubbyDB');

    app.listen(port,(error)=>{
        if(error) throw error;
        console.log(`i am working at ${port}`);
    })
});