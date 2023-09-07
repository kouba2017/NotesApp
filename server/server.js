const express=require('express');
const cors= require("cors");
const app=express();
require("dotenv").config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({credentials:true,origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true})); //this will allow the addition of json objects with strings and arrays
require("./config/mongoose.config");
require('./routes/note.route')(app);
require('./routes/user.route')(app); 

const port=process.env.PORT
app.listen(port,()=>console.log("Server connected on port: ",port));
