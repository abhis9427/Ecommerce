
const express = require("express");
const Sequelize  = require("sequelize");
require("dotenv").config();
const bodyparser = require("body-parser");


const app= express();
app.use(bodyparser.json());

const db=require("./model/index")

//make force: true , to persist in database
db.sequelize.sync({force:true})
.then(()=>{
    console.log("db synced")
})

require("./route/category.routes")(app)

app.get('/home',(req,res)=>{
    res.send("hi");
})
app.listen(process.env.PORT,()=>{
    console.log(`App is listning at port : ${process.env.PORT}`);
})