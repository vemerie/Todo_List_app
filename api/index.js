//api/index.js
// This where the todo initial data api is 
//built and future apis will be built here too

const express = require('express')
const router = express.Router();

router.get('/data',(req,res)=>{
    res.send({data:initialData})
})
module.exports = router;



//Initial data from the Api

const initialData=[
    "Go to the grocery",
    "Travel to LA   ",
    "Begin building a flutter App",
    "Begin an AI Bootcamp"
]