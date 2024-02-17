const mongoose = require("mongoose");
const buySchema = new mongoose.Schema({
    productname: {
        type: String,
    },
    fullname: {
        type: String,
        minLength: [3, "Fullname should have minimum3 character"],
        maxLength: [20, "Fullname shouldn't exceed 20 characters"],
        required: [true, "Please enter  fullname"],
        unique: true
    },
    address: {
        type:String,
        minLength: [5, "Address should have minimum 5 characters"],
        maxLength: [100, "Address shouldn't exceed 100 characters"],
        match: /^[a-zA-Z0-9\s,.'-]*$/,
        required: [true, "Please enter a valid address"]
    },

    number: {
        type: String,
        
        match: /^\d{10}$/,
        required: [true, "Please enter a valid 10-digit phone number"]
    }

})
module.exports = mongoose.model("buyuser", buySchema);