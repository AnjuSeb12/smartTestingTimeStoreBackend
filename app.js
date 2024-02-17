const express=require("express");

const app=express();
const cors=require("cors");
const cookieParser=require('cookie-parser');

app.use(cors({
    credentials:true,
    origin:true,
}));
app.use(cookieParser());


app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());
app.use(__dirname +"/uploads",express.static(__dirname + "uploads"));

const userRoutes=require("./routes/userRoutes");
const smartRoutes=require("./routes/smartRoutes");
const userBuyRoutes=require("./routes/userBuyRoutes");

app.use('/api/v1',userRoutes);
app.use('/api/v1',smartRoutes);
app.use('/api/v1',userBuyRoutes);



app.use((err,req,res,next) => {
    console.log(err.message);
})
module.exports=app;