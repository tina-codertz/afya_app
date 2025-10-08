import mongoose, { connect } from "mongoose";

//MongoDB connection

const uri = "mongodb://127.0.0.1:27017/afya_connect";

//connect to mongodb
connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log("MongoDB connection error:",err));

export default mongoose;