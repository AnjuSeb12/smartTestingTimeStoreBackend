const mongoose=require("mongoose");
const smartSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter Branded watch name"]
    },
    details:{
        type:String,
        required:[true,"Please enter Details"]
    },
   
    amount:{
        type:String,
        required:[true,"Please enter the amount"]
    },
    photograph:{
        type:String,
        // required:[true,"Please enter restaurant photograph"]
    }
})
module.exports=mongoose.model("smart",smartSchema);