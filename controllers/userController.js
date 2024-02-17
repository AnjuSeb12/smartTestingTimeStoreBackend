const bcrypt=require("bcrypt");
const saltRound=10;
const User=require("../models/userModel");
const { getToken } = require("../utils/jwtToken");



exports.postSmartRegister = async (req,res) => {

    const {fullname,email,password}=req.body;
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(409).json({
                success: false,
                message: 'E-mail already exist',
                
            });
        } 
        const hashedPass=await bcrypt.hash(password,saltRound);
        const user= await User.create({
            fullname,
            email,
            password:hashedPass
        
        });
       
        if(!user){
            return res.status(500).json({
                success:false,
                message:"User Registeration Failed!",
            })
        }
        res.status(201).json({
            success:true,
            message:"User Registration Successfully Completed!!",
            user,
            isAuthenticated:true,
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
  } 
}
// login
exports.postSmartLogin = async (req,res,next) => {
    
    const {email,password}=req.body;
    try{
    const user= await User.findOne({email});
    console.log(req.body);
    console.log("user",user);
    if(!user){
        return res.status(500).json({
            success:false,
            message:"User not Found!"

        });
    }
    const isValid= await bcrypt.compare(password,user.password);
    console.log("isValid",isValid);
    if(!isValid){
        return res.status(401).json({
            success:false,
            message:'Invalid credentials!'
        });
    }
    req.user=user;
    getToken(req,res);
 
    // res.status(201).json({
    //     success:true,
    //     message:"Loged in Successfully!",
    //     isAuthenticated:true,
    //     user,
    // });

    
} catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    });
    
}

}
exports.getAllUsersList=async (req,res) => {
   

    // console.log(token);
        try {
            const users=await User.find();
          
            if(!users){
                return res.status(500).json({
                    success:false,
                    message:"Users not found!"
                });
            }
            res.status(200).json({
                success:true,
                users
            });
            
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error.message
            });
            
        }
    }
    exports.deleteUserDetail = async (req,res) => {
        const {id}=req.params;
        try {
            const user=await User.findByIdAndDelete(id);
            if(!user){
                return res.status(404).json({
                    success:false,
                    message:"User not Found",
                    
                });
            }
            res.status(200).json({
                success:true,
                message:"User Deleted Successfully"
              
                
            });
    
    
        } catch (error) {
            res.status(500).json({
                success:false,
                message:error.message
            });
        
        }
    }
    