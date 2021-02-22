//Basic routing using express js

const express = require("express");

const app = express();
let port = 8888;

let cuisine =  [{
    "_id": 1,
    "name": "North Indian",
    "cuisine": 1
  },
  {
    "_id": 2,
    "name": "South Indian",
    "cuisine": 2
  },
  {
    "_id": 3,
    "name": "Chinese",
    "cuisine": 3
  },
  {
    "_id": 4,
    "name": "Fast Food",
    "cuisine": 4
  },
  {
    "_id": 5,
    "name": "Street Food",
    "cuisine": 5
  }
];

let location = [
    {
        "_id":1,
	    "city_name":"Delhi",
        "city":1,
        "country_name" :"India"
    },
    {
        "_id": 2,
        "city_name":"Mumbai",
        "city": 2,
        "country_name":"India"
    },
    {
        "_id": 3,
        "city_name":"Pune",
        "city": 3,
        "country_name":"India"
    },
    {
        "_id": 4,
        "city_name":"Bangalore",
        "city": 4,
        "country_name":"India"
    },
    {
        "_id": 5,
	    "city_name":"Chandigarh",
        "city": 5,
        "country_name": "India"
    }
]


app.get("/",(req,res)=>{
    res.send("i'm default routing");
});

app.get("/cuisine",(req,res)=>{
    res.send(cuisine);
});

app.get("/location",(req,res)=>{
    res.send(location);
});

app.listen(port,(error)=>{
    if (error) throw error;
    console.log(`i'm working at port number ${port}`);
});

