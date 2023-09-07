//import mongoose
const mongoose=require('mongoose');
//connect to the db
const db_name=process.env.DB
mongoose.connect(`mongodb://127.0.0.1:27017/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 
    .then(()=>console.log("established a cnx to the db"))
    .catch(err=>console.log("Sth is wrong",err));