const mongoose = require("mongoose");
const DB = "mongodb://av478136:6067@ac-yy6dhdb-shard-00-00.6gsseke.mongodb.net:27017,ac-yy6dhdb-shard-00-01.6gsseke.mongodb.net:27017,ac-yy6dhdb-shard-00-02.6gsseke.mongodb.net:27017/?ssl=true&replicaSet=atlas-1f91q4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB,{

}).then(()=> console.log("MongoDB connect successfully"))
.catch((error)=> console.log(error.message));
