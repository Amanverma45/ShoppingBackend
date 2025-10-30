const mongoose = require("mongoose");
const DB = "mongodb+srv://amanarandiya:1234@cluster0.zekoxmn.mongodb.net/?appName=Cluster0"

mongoose.connect(DB,{

}).then(()=> console.log("MongoDB connect successfully"))
.catch((error)=> console.log(error.message)); 